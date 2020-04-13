import * as http from 'http';

const server = http.createServer((request, response) => {
    response.end('Hello Node!');
});

server.listen(8000);

// 执行npm init -y（-y表示创建包含默认配置的package.json文件）
// npm i @types/node --save（安装node类型定义文件）
// node本身是不认ts的，所以用tsconfig.json将ts编译成js
//按ctrl+shift+B编译ts文件成为js文件
//node build/hello_server.js启动node服务器
//使用express进行开发 npm install express --save
//安装express类型定义文件 npm install @types/express --save
//启动服务器后，我们改变文件内容node并不会自动帮我们加载变化，要重启服务器后才能加载变化，这对开发很不方便
//npm install -g nodemon这个工具会监控我们的源代码，当代码改变时会自动加载变化，用nodemon build/auction_server.js启动服务器