"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ws_1 = require("ws");
const path = require("path");
class Product {
    constructor(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
}
exports.Product = Product;
class Comment {
    constructor(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
}
exports.Comment = Comment;
const products = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，是我在学习慕课网Angular入门实战时创建的", ["电子产品", "硬件设备"]),
    new Product(2, "第二个商品", 2.99, 2.5, "这是第二个商品，是我在学习慕课网Angular入门实战时创建的", ["图书"]),
    new Product(3, "第三个商品", 3.99, 4.5, "这是第三个商品，是我在学习慕课网Angular入门实战时创建的", ["硬件设备"]),
    new Product(4, "第四个商品", 4.99, 1.5, "这是第四个商品，是我在学习慕课网Angular入门实战时创建的", ["电子产品", "硬件设备"]),
    new Product(5, "第五个商品", 5.99, 3.5, "这是第五个商品，是我在学习慕课网Angular入门实战时创建的", ["电子产品"]),
    new Product(6, "第六个商品", 6.99, 2.5, "这是第六个商品，是我在学习慕课网Angular入门实战时创建的", ["图书"])
];
const comments = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-03-03 23:22:22', '李四', 4, '东西是不错'),
    new Comment(3, 1, '2017-04-04 21:22:22', '王五', 2, '东西挺不错'),
    new Comment(4, 2, '2017-05-05 20:22:22', '赵六', 4, '东西还不错')
];
const app = express();
//定义访问根目录时候返回的内容
app.use('/', express.static(path.join(__dirname, '..', 'client')));
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });
app.get('/api/products', (req, res) => {
    let result = products;
    let params = req.query;
    if (params.title) {
        result = result.filter((p) => p.title.indexOf(params.title) !== -1);
    }
    if (params.price && result.length > 0) {
        result = result.filter((p) => p.price <= params.price);
    }
    if (params.category !== '-1' && result.length > 0) {
        result = result.filter((p) => p.categories.indexOf(params.category) !== -1);
    }
    res.json(result);
});
app.get('/api/products/:id', (req, res) => {
    res.json(products.find((product) => product.id == req.params.id));
});
app.get('/api/products/:id/comments', (req, res) => {
    res.json(comments.filter((comment) => comment.productId == req.params.id));
});
const server = app.listen(8000, 'localhost', () => {
    console.log('服务器已启动，地址是：http://localhost:8000');
});
const subscription = new Map();
const wsServer = new ws_1.Server({ port: 8085 });
wsServer.on('connection', websocket => {
    // websocket.send('这个消息是服务器主动推送的');
    websocket.on('message', message => {
        // console.log('接收到消息：' + message);
        let messageObj = JSON.parse(message.toString());
        let productIds = subscription.get(websocket) || [];
        subscription.set(websocket, [...productIds, messageObj.productId]);
        console.log('接收到消息：' + JSON.stringify(subscription.get(websocket)));
    });
});
const currentBids = new Map();
setInterval(() => {
    products.forEach(p => {
        let currentBid = currentBids.get(p.id) || p.price;
        let newBid = currentBid + Math.random() * 5;
        currentBids.set(p.id, newBid);
    });
    subscription.forEach((productIds, ws) => {
        console.log(ws.readyState);
        if (ws.readyState === 1) {
            //这里map方法里面的写法比较少见，一般都是包一个function
            console.log(productIds);
            let newBids = productIds.map(pid => ({
                productId: pid,
                bid: currentBids.get(pid)
            }));
            ws.send(JSON.stringify(newBids));
        }
        else {
            subscription.delete(ws);
        }
    });
}, 2000);
//定时向客户端发消息
// setInterval(() => {
//     if (wsServer.clients) {
//         wsServer.clients.forEach(client => {
//             client.send('这是定时推送');
//         })
//     }
// }, 2000);
//要使用websocket，先安装npm install ws --save
//然后安装类型定义文件，npm install @types/ws --save-dev
