var myname: string = 'wri';
//any赋任何类型的值都可以
var alias: any = 'qq';
var age: number = 13;
var man: boolean = true;

function test(): void {

}

//方法参数也可以声明类型
function test2(name: string): string {
    return '';
}

class Person {
    name: string;
    age: number;
}

var zhangsan: Person = new Person();
zhangsan.age = 18;
zhangsan.name = 'wri';