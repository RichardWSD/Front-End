/*
在一个模块中通过var定义的变量,其作用域范围是当前模块,外部不能直接访问
如果我们想在一个模块中能够访问另外一个模块中定义的变量,可以:
    1.把变量作为global对象的一个属性,但是这样的做法不推荐
    2.使用模块对象module
 */

//  var a = 100;
//  global.a = 100;

/*
    module: 保存和提供和当前模块有关的一些信息
    在这个module对象,有一个子对象:exports对象
    我们可以通过这个对象把一个模块中的局部变量对象提供访问
    在模块作用域中,还有一个内置的模块对象exports,它其实就是module.exports
*/
// console.log(module);

// var a = 100;
// module.exports.a = a;

console.log(module.exports === exports);

