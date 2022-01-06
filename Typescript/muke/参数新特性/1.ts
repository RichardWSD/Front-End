//默认参数
var myname: string = 'wri';
//带默认值的参数要放最后
function test(a: string, b: string, c: string = 'jojo') {
    console.log(a);
    console.log(b);
    console.log(c);
}


//可选参数
//可选参数也必须声明在必选参数后面
function test1(a: string, b?: string, c: string = 'jojo') {
    console.log(a);
    console.log(b);
    console.log(c);
}

test('a','b','c')