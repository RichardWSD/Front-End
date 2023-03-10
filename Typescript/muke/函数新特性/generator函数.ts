//控制函数的执行过程，手工暂停和恢复代码执行
function* doSomething() {
    console.log('start');
    yield;
    console.log('finish');
}

var func1 = doSomething();
func1.next();
func1.next();


function* getStockPrice(stock) {
    while(true){
        yield Math.random()*100;
    }
}

var priceGenerator=getStockPrice('IBM');
var limitPrice=15;
var price=100;

while(price>limitPrice){
    price=priceGenerator.next().value;
    console.log(`the generator return ${price}`);
}
console.log(`buying at ${price}`);
