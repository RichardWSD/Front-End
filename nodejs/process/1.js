/*
process: 他是一个全局对象
 */

//  console.log(process);
//  console.log(global.process);

// console.log(process.argv);
// console.log(process.title);

// setTimeout(() => {
//     process.exit();
// }, 5000);



// function Log(data) {
//     process.stdout.write(data);
// }

// Log('你好');

//默认情况下,输入流是关闭的,要监听处理输入流数据,首先要开启输入流
// process.stdin.resume();

// //用于监听用户的输入数据
// process.stdin.on('data', function(chunk){
//     console.log('用户输入了: ' + chunk);

// })

var a,b;
process.stdout.write('请输入a的值: ');
process.stdin.on('data', function(chunk){
    console.log('chunk---',Number(chunk));

    if(!a){
        a = Number(chunk);
        console.log('请输入b的值: ');

    }else{
        b = Number(chunk);
        process.stdout.write('结果是: ' + (a + b));
    }
})


