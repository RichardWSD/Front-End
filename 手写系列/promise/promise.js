var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function Promise(execute) {
    var that = this;
    that.state = PENDING;
    that.onFulfilledFn = [];
    that.onRejectedFn = [];

    // resolve和reject类似点火作用，它知道紧挨着的then的回调方法，执行他们就执行了紧挨着的then的resolve,reject方法
    function resolve(value) {
        setTimeout(function() {
            if (that.state === PENDING) {
                that.state = FULFILLED;
                that.value = value;
                that.onFulfilledFn.forEach(function(f) {
                    f(that.value);
                });
            }
        });
    }

    function reject(reason) {
        setTimeout(function() {
            if (that.state === PENDING) {
                that.state = REJECTED;
                that.reason = reason;
                that.onRejectedFn.forEach(function(f) {
                    f(that.reason);
                });
            }
        });
    }
    try {
        execute(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
Promise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled =
        typeof onFulfilled === 'function'
            ? onFulfilled
            : function(x) {
                  return x;
              };
    onRejected =
        typeof onRejected === 'function'
            ? onRejected
            : function(e) {
                  throw e;
              };
    var that = this;
    var promise;
    if (that.state === FULFILLED) {
        // 通过这个把promise串成链，每个then方法都会返回新的promise
        promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                try {
                    var x = onFulfilled(that.value);
                    resolvePromise(promise, x, resolve, reject);
                } catch (reason) {
                    reject(reason);
                }
            });
        });
    }
    if (that.state === REJECTED) {
        promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                try {
                    var x = onRejected(that.reason);
                    resolvePromise(promise, x, resolve, reject);
                } catch (reason) {
                    reject(reason);
                }
            });
        });
    }
    if (that.state === PENDING) {
        promise = new Promise(function(resolve, reject) {
            that.onFulfilledFn.push(function() {
                try {
                    var x = onFulfilled(that.value);
                    resolvePromise(promise, x, resolve, reject);
                } catch (reason) {
                    reject(reason);
                }
            });
            that.onRejectedFn.push(function() {
                try {
                    var x = onRejected(that.reason);
                    resolvePromise(promise, x, resolve, reject);
                } catch (reason) {
                    reject(reason);
                }
            });
        });
    }
    //这是then方法的返回值，返回一个新的promise
    return promise;
};

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('x 不能与 promise 相等'));
    }
    if (x instanceof Promise) {
        if (x.state === FULFILLED) {
            resolve(x.value);
        } else if (x.state === REJECTED) {
            reject(x.reason);
        } else {
            x.then(function(y) {
                resolvePromise(promise, y, resolve, reject);
            }, reject);
        }
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        var executed;
        try {
            var then = x.then;
            if (typeof then === 'function') {
                then.call(
                    x,
                    function(y) {
                        if (executed) return;
                        executed = true;
                        resolvePromise(promise, y, resolve, reject);
                    },
                    function(e) {
                        if (executed) return;
                        executed = true;
                        reject(e);
                    }
                );
            } else {
                resolve(x);
            }
        } catch (e) {
            if (executed) return;
            executed = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}

/* resolve */
Promise.resolve = function(value) {
  if (value instanceof Promise) {
      return value;
  }

  return new Promise(function(resolve, reject) {
      resolve(value);
  });
}

/* reject */
Promise.reject = function(reason) {
  return new Promise(function(resolve, reject) {
      reject(reason);
  });
}

/* catch */
Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
}

/* finally */
Promise.prototype.finally = function(fn) {
  return this.then(function(value) {
      return Promise.resolve(fn()).then(function() {
          return value;
      })
  }, function(error) {
      return Promise.resolve(fn()).then(function() {
          throw error;
      });
  });
}

/* Promise.all */
Promise.all = function(promiseArr) {
  return new Promise(function(resolve, reject) {
      const length = promiseArr.length;
      const result = [];
      let count = 0;
      if (length === 0) {
          return resolve(result);
      }

      for (let [i, p] of promiseArr.entries()) {
          Promise.resolve(p).then(function(data) {
              result[i] = data;
              count++;
              if (count === length) {
                  resolve(result);
              }
          }, function(reason) {
              reject(reason);
          });
      }
  });
}

/* Promise.race */
Promise.race = function(promiseArr) {
  return new Promise(function(resolve, reject) {
      const length = promiseArr.length;
      if (length === 0) {
          return resolve();
      } 

      for (let item of promiseArr) {
          Promise.resolve(item).then(function(value) {
              return resolve(value);
          }, function(reason) {
              return reject(reason);
          });
      }
  });
}

/* Promise.allSettled */
Promise.allSettled = function(promiseArr) {
  return new Promise(function(resolve) {
    const length = promiseArr.length;
    const result = [];
    let count = 0;

    if (length === 0) {
      return resolve(result);
    } else {
      for (let [i, p] of promiseArr.entries()) {
        Promise.resolve(p).then((value) => {
            result[i] = { status: 'fulfilled', value: value };
            count++;
            if (count === length) {
                return resolve(result);
            }
        }, (reason) => {
            result[i] = { status: 'rejected', reason: reason };
            count++;
            if (count === length) {
                return resolve(result);
            }
        });
      }
    }
  });
}

/* 使用 Promise.finally 实现 Promise.allSettled */
Promise.allSettled = function(promises) {
  // 也可以使用扩展运算符将 Iterator 转换成数组
  // const promiseArr = [...promises];
  const promiseArr = Array.from(promises);
  return new Promise(resolve => {
      const result = [];
      const len = promiseArr.length;
      let count = len;
      if (len === 0) {
        return resolve(result);
      }
      for (let i = 0; i < len; i++) {
          promiseArr[i].then((value) => {
              result[i] = { status: 'fulfilled', value: value };
          }, (reason) => {
              result[i] = { status: 'rejected', reason: reason };
          }).finally(() => { 
              if (!--count) {
                  resolve(result);
              }
          });
      }
  });
}

/* 使用 Promise.all 实现 Promise.allSettled */
Promise.allSettled = function(promises) {
  // 也可以使用扩展运算符将 Iterator 转换成数组
  // const promiseArr = [...promises];
  const promiseArr = Array.from(promises);
  return Promise.all(promiseArr.map(p => Promise.resolve(p).then(res => {
    return { status: 'fulfilled', value: res }
  }, error => {
    return { status: 'rejected', reason: error }
  })));
}