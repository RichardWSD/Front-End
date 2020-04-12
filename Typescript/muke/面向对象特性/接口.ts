//用来建立某种代码规范，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定
interface IPerson{
    name:string;
    age:number;
}

class Person2{
    constructor(public config:IPerson){

    }
}

var pp=new Person2({
    name:'wri',
    age:18
});

interface Animal{
    eat();
}

class Sheep implements Animal{
    eat(){
        console.log('i eat grass');
    }
}

class Tiger implements Animal{
    eat(){
        console.log('i eat meat');
    }
}