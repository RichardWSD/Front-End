var http = require('http');
var url = require('url')

var server = http.createServer();

server.on('request', function(req, res) {

    // console.log(req.url);
    var urlStr = url.parse(req.url)
    //console.log(urlStr);
    switch (urlStr.pathname) {
        case '/':
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end('<h1>这是首页</h1>');
            break;
        case '/user':
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end('<h1>个人中心</h1>');
            break;
        default:
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end('<h1>出错啦!!!</h1>');
            break;
            break;
    }

})

server.listen(8080, 'localhost');