var express = require('express')
//加载模板处理模块
var swig = require('swig');
//加载数据库模块
var mongoose = require('mongoose');
var bodyParser = require('body-parser');    // 数据处理中间件
var Cookies = require('cookies');                // cookies模块
var User = require('./models/User');          // 数据表模型
//创建app应用
var app = express();

//设置静态文件托管
//当用户访问的url以/pulic开头,那么直接返回对应__dirname + '/public'的文件
app.use('/public', express.static(__dirname + '/public'));

//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数:模板引擎的名称,同时也是模板文件的后缀;第二个参数表示用于解析处理模板内容的方法
app.engine('html', swig.renderFile);
//设置模板文件存放的目录,第一个参数必须是views,第二个参数是目录
app.set('views', './views');
//注册所使用的模板引擎,第一个参数必须是view engine,第二个参数和app.engine这个方法中定义的模板引擎的名称是一致的
app.set('view engine', 'html');
//在开发过程中,需要取消缓存
swig.setDefaults({ cache: false });

// 数据返回中间件包装
app.use(bodyParser.urlencoded({extended: true}));

//获取设置cookies
app.use(function (req, res, next) {
    req.cookies = new Cookies(req, res);

    req.userInfo = {}
    if  (req.cookies.get('userInfo')) {
      try {
        req.userInfo = JSON.parse(req.cookies.get('userInfo'));
        // 获取当前登录用户类型,是不是管理员
        User.findById(req.userInfo._id).then(function(userInfo) {
          req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
          next();
        })
      } catch (e) {
        next();
      }
    } else {
        next();
    }
});

//根据不同功能划分模块
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));

/* app.get('/', function (req, res, next) {
    //res.send('<h1>欢迎光临我的博客</h>')


    // 读取views目录下的指定文件,解析并返回给客户端
    // 第一个参数:表示模板的文件,相对于views目录
    // 第二个参数:传递给模板使用的数据

   res.render('index');
})
*/

/*
app.get('/main.css', function(req, res, next) {
    res.setHeader('content-type', 'text/css');
    res.send('body{background:red;}');
}) */

mongoose.connect('mongodb://localhost:27017/blog', function (err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
        //监听http请求
        app.listen(8081);
    }
});




/*
    bodyParser: 解析post请求数据
    cookies: 读写cookies
    swig: 模板解析引擎
    mongoose: 操作mongodb数据
    markdown: markdown语法解析生成模块
*/

/* 
   所有请求都会到这个中间件来
    app.use((req, res, next) => {
      next() //到下一个中间件
      res.end('xxxx') //直接返回了
    })
    --------------------------------------------------
    app.use('user', (req, res, next) => {
      console.log(1)
      next() // 执行完这个1回调会到2回调
      // next('route') //这个会跳过这个中间件后面的回调，直接跳到下一个中间件（打印出3）
    }, (req, res, next) => {
      console.log(2)
    })

    app.use('user', (req, res, next) => {
      console.log(3)
    })
    ---------------------------------------------------

    中间件分为应用级别、路由级别、错误处理、内置、第三方中间件
*/