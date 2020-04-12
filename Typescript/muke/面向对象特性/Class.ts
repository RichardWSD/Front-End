//类定义，构造函数，继承
class Person {

    //这样写默认帮我们声明了一个name4属性
    constructor(public name4: string) {
        console.log(name4);
    }

    name; //默认是public

    eat() {
        console.log('i am eating');
    }

    private name2;
    protected name3;
}

class Employee extends Person {
    constructor(name: string, code: string) {
        super(name); //子类构造函数必须调用父类构造函数
        this.code = code;
    }

    code: string;
    work() {
        super.eat();
    }
}

//泛型
var workers:Array<Person> = [];
workers[0]=new Person('wri');
workers[1]=new Employee('wri','1');

var e1 = new Employee('wri', '1');

var p1 = new Person('batman');
p1.name = 'batman';
p1.eat();

var p2 = new Person('superman');
p2.name = 'superman';
p2.eat();

