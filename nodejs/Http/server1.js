/*
搭建一个http的服务端，用于处理用户发送的http请求
需要使用node提供一个模块 http
*/

//加载一个http模块
var http = require('http');
//通过http模块下的createServer创建并返回一个web服务器对象
var server = http.createServer();

server.on('error', function(err) {
    console.log(err);
})

server.on('listening', function(err) {
    console.log('listening...');
})

server.on('request', function(req, res) {
    console.log('有客户端请求了');
    // console.log(req);
    // console.log(typeof(req));
    // console.log(req instanceof http.IncomingMessage);
    // console.log(Object.keys(req));

    res.setHeader('miaov', 'leo')
    //writeHead(statusCode, [reasonPhrase], [headers]),这个方法只能在当前请求中使用一次,并且必须在response.end()之前调用
    res.writeHead(200, 'handsome boy', {
        'content-type': 'text/plain'
    })
    res.write('<h1>hello</h1>');
    res.end();//当所有正文和头信息发送完成以后调用该方法告诉服务器数据已经全部发送完成了。
              //这个方法在每次完成信息发送以后必须调用，并且是最后调用
    //res.end('<h1>hello</h1>')
})

server.listen(8080, 'localhost');

//server.listen();
//console.log(server.address());
