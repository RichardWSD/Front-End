//用来声明匿名函数，消除传统匿名函数的this指针问题
var sum = (arg1, arg2) => arg1 + arg2;

var myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(value => value % 2 == 0));

function getStock(name: string) {
    this.name = name;
    setInterval(function () {
        console.log(`this name is ${this.name}`);
    }, 1000);
}

var stock = getStock('wri');

function getStock2(name: string) {
    this.name = name;
    setInterval(() => console.log(`this name is ${this.name}`)
        , 1000);
}

var stock2 = new getStock2('wri2');