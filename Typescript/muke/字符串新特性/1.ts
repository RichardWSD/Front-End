//多行字符串
var content="aa"+
"bb"+
"cc";

var content=`aa
bb
cc`;

//字符串模板
var myname="wri";
var getName=function(){
    return 'wri';
}
console.log(`hello ${myname}`);
console.log(`hello ${getName()}`);

//自动拆分字符串
function test(template,name,age){
    console.log(template);
    console.log(name);
    console.log(age);
}

var myname="wri";
var getAge=function(){
    return 10;
}
test`hello my name is ${myname},i'm ${getAge()} old`