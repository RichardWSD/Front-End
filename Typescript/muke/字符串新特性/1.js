var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
//多行字符串
var content = "aa" +
    "bb" +
    "cc";
var content = "aa\nbb\ncc";
//字符串模板
var myname = "wri";
var getName = function () {
    return 'wri';
};
console.log("hello " + myname);
console.log("hello " + getName());
//自动拆分字符串
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "wri";
var getAge = function () {
    return 10;
};
test(__makeTemplateObject(["hello my name is ", ",i'm ", " old"], ["hello my name is ", ",i'm ", " old"]), myname, getAge());
