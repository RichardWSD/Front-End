var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

var server = http.createServer();
var htmlDir = __dirname + '/html/';

server.on('request', function (req, res) {

    // console.log(req.url);
    var urlStr = url.parse(req.url)
    //console.log(urlStr);
    switch (urlStr.pathname) {
        case '/':
            sendData(htmlDir + 'index.html', req, res)
            break;
        case '/user':
            sendData(htmlDir + 'user.html', req, res)
            break;
        case '/login':
            sendData(htmlDir + 'login.html', req, res)
            break;
        case '/login/check':
            // console.log(req.method);
            // console.log(urlStr);
            //console.log(querystring.parse(urlStr.query));
            if(req.method.toUpperCase() == 'POST'){
                var str = '';
                req.on('data', function(chunk){
                    str += chunk;
                });

                req.on('end', function(){
                    console.log(str);
                    console.log(querystring.parse(urlStr.query));
                });
            }
            break;
        default:
            sendData(htmlDir + 'err.html', req, res)
            break;
    }

})

function sendData(file, req, res) {
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end('<h1>出错啦!!!</h1>');
        } else {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end(data);
        }
    })
}

server.listen(8080, 'localhost');