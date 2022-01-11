// main.js
var mod = require('./common模块输出是值的拷贝.js');

console.log(mod.counter);  // 3
// mod.counter = 55
mod.incCounter();
console.log(mod.counter); // 3


console.log('=====');
console.log(mod.countRef.counter);  // 3
mod.incCounterRef();
console.log(mod.countRef.counter); // 3