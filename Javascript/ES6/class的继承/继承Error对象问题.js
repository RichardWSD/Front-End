// 这里要研究细节只能看原生构造函数源码，而且此问题用 ES6 的继承就可以解决，没必要深究
// 这个行为一句讲晒：ES5拓展不了原生构造函数，Array.apply 或者 Error.call 等的这种行为都是忽略传入的第一个参数，绑定不了东西在这个对象上
// 而且返回值是会返回一个新对象

var e = {};

console.log(Object.getOwnPropertyNames(Error.call(e)))
// [ 'stack' ]

console.log(Object.getOwnPropertyNames(e));
// []

function MyArray() {
  const _this = [1,2,3]
  const arr = Array.apply(_this, arguments);
  console.log(arr, _this);
}
MyArray()
