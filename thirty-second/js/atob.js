const atob = str => Buffer.from(str, 'base64').toString('binary');  //这里toString参数不填、utf-8、binary都是可以的

console.log(atob('Zm9vYmFy')); // 'foobar'

// https://www.cnblogs.com/archerhao/p/11423571.html