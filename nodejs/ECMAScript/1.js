/*
js: ecmascript + DOM + BOM
nodejs: ecmascript +　os + file + net + database

在ecmascript部分node和js其实是一样的,比如数据类型的定义,语法机构,内置对象

在js中的顶层对象:window
在node中的顶层对象:global

 */

 var a = 100;
 console.log(a);

 var d = new Date();
 console.log(d.getFullYear());
 console.log(d.getMonth() + 1);

 var arr = [1,2,3];
 arr.push(4);
 console.log(arr);

 function Person(name) {
     this.name = name;
 }

 Person.prototype.run = function(){
     console.log(this.name + ' running');
 }