//通过表达式将对象或数组拆解成任意数量的变量
function getStock() {
    return {
        code: 'IBM',
        price: 100,
        priceObj: {
            price1: 200,
            price2: 400
        }
    }
}

// var stock=getStock();
// var code=stock.code;
// var price=stock.price;
//等价于
var { code: codex, price, priceObj: { price2 } } = getStock();
console.log(codex);//IBM
console.log(price);//100
console.log(price2);//400

var array1 = [1, 2, 3, 4];
var [number1, number2] = array1;
console.log(number1);//1
console.log(number2);//2

var [number1, , , number2] = array1;
console.log(number1);//3
console.log(number2);//4

var [number1, number2, ...others] = array1;
console.log(number1);//1
console.log(number2);//2
console.log(others);//[3,4]

function doSomething([number1, number2, ...others]) {
    console.log(number1);//1
    console.log(number2);//2
    console.log(others);//[3,4]
}

doSomething(array1);