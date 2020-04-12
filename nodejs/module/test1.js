// var xiaoming = function (name) {
//     this.name = name    
//     this.sayHello = function () {
//         return 'hello ' + this.name
//     }    
//     this.sayGoodBye = function () {
//         return 'goodbye ' + this.name
//     }
// }
// //module.exports = xiaoming
// console.log(module.exports);
// exports.abc= function abc(){
//     console.log(111)
// }
// console.log(exports);
// console.log(exports === module.exports);

// var func1 = function() {
//     console.log("func1");
//  };

//  var func2 = function() {
//     console.log("func2");
//  };

//  module.exports = 'abc';
//  module.exports = func1;
//  module.exports.function2 = func2;

// exports.function1 = func1;
// exports.function2 = func2;



var sayHello = function(){    console.log('hello')
}
module.exports = sayHello
console.log(module.exports); 
console.log(exports); 
console.log(exports === module.exports);