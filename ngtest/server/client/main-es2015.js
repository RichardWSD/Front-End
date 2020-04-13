(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-search></app-search>\n    </div>\n    <div class=\"col-md-9\">\n      <!-- <div class=\"row carousel-container\">\n        <app-carousel></app-carousel>\n      </div>\n      <div class=\"row\">\n        <app-product></app-product>\n      </div> -->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n      <img src=\"http://placehold.it/800x300\">\n    </div>\n    <div class=\"item\">\n      <img  src=\"http://placehold.it/800x300\">\n    </div>\n    <div class=\"item\">\n      <img src=\"http://placehold.it/800x300\">\n    </div>\n  </div>\n\n  <!-- Controls -->\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n  <footer>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p>慕课网Augular入门实战2017</p>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row carousel-container\">\n  <app-carousel></app-carousel>\n</div>\n<div class=\"row\">\n  <app-product></app-product>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse nav-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a href=\"#\" class=\"navbar-brand\">在线竞拍</a>\n      </div>\n      <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li><a href=\"#\">关于我们</a></li>\n          <li><a href=\"#\">联系我们</a></li>\n          <li><a href=\"#\">网站地图</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-detail/product-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\">\n  <img src=\"http://placehold.it/820x230\" alt=\"\">\n  <div>\n    <h4 class=\"pull-right\">{{product?.price}}元</h4>\n    <h4>{{product?.title}}</h4>\n    <p>{{product?.desc}}</p>\n  </div>\n  <div>\n    <p class=\"pull-right\">{{comments?.length}}</p>\n    <p>\n      <app-stars [rating]=\"product?.rating\"></app-stars>\n    </p>\n  </div>\n</div>\n\n<div class=\"thumbnail\">\n  <button class=\"btn btn-default btn-lg\" [class.active]=\"isWatched\" (click)=\"watchProduct()\">{{isWatched?'取消关注':'关注'}}</button>\n  <label for=\"\">最新出价：{{currentBid | number:'.2-2'}}元</label>\n</div>\n\n<div class=\"well\">\n  <div>\n    <button class=\"btn btn-success\" (click)=\"isCommentHidden=!isCommentHidden\">发表评论</button>\n  </div>\n  <div [hidden]=\"isCommentHidden\">\n    <div>\n      <!-- 在这里通过[(rating)]实现了app-stars组件的rating属性和product-detail.component的newRating属性之间的双向绑定 -->\n      <!-- 前提是要有rating输入属性，ratingChange输出属性（注意这里命名必须是这个xxxChange才行） -->\n      <app-stars [(rating)]=\"newRating\" [readonly]=\"false\"></app-stars>\n      <div><textarea name=\"\" id=\"\" [(ngModel)]=\"newComment\"></textarea></div>\n      <div><button class=\"btn\" (click)=\"addComment()\">提交</button></div>\n    </div>\n  </div>\n  <div class=\"row\" *ngFor=\"let comment of comments\">\n    <hr>\n    <div class=\"col-md-12\">\n      <app-stars [rating]=\"comment.rating\"></app-stars>\n      <span>{{comment.user}}</span>\n      <span class=\"pull-right\">{{comment.timestamp}}</span>\n      <p></p>\n      <p>{{comment.content}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ro\">\n  <div class=\"col-sm-12\">\n    <div class=\"form-group\"> -->\n      <!-- 当input里面的值发生变化，titleFilter字段会往外发射value change事件 -->\n      <!-- <input type=\"text\" class=\"form-control\" placeholder=\"请输入商品名称\" [formControl]=\"titleFilter\">\n    </div>\n  </div>\n</div> -->\n<!-- <div *ngFor=\"let product of products | filter:'title':keyword\" class=\"col-md-4 col-sm-4 col-lg-4\"> -->\n    <div *ngFor=\"let product of products | async\" class=\"col-md-4 col-sm-4 col-lg-4\">\n  <div class=\"thumbnail\">\n    <!-- 属性绑定：[] -->\n    <!-- ngFor指令 -->\n    <img [src]=\"imgUrl\" alt=\"\">\n    <div class=\"caption\">\n      <h4 class=\"pull-right\">{{product.price}}元</h4>\n      <h4><a href=\"\" [routerLink]=\"['/product',product.id]\">{{product.title}}</a></h4>\n      <p>{{product.desc}}</p>\n    </div>\n    <div>\n      <app-stars [rating]=\"product.rating\"></app-stars>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formModel\" (ngSubmit)=\"onSearch()\" novalidate>\n  <div class=\"form-group\" [class.has-error]=\"formModel.hasError('minlength', 'title')\">\n    <label for=\"productTitle\">商品名称：</label>\n    <input formControlName=\"title\" type=\"text\" class=\"form-control\" id=\"productTitle\" placeholder=\"商品名称\">\n    <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('minlength', 'title')\">请至少输入3个字</span>\n  </div>\n  <div class=\"form-group\" [class.has-error]=\"formModel.hasError('positiveNumber', 'price')\">\n    <label for=\"productPrice\">商品价格：</label>\n    <input formControlName=\"price\" type=\"number\" class=\"form-control\" id=\"productPrice\" placeholder=\"商品价格\">\n    <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('positiveNumber', 'price')\">请输入整数</span>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"productCategory\">商品类别：</label>\n    <select formControlName=\"category\" name=\"\" id=\"productCategory\" class=\"form-control\">\n      <option value=\"-1\">全部分类</option>\n      <option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <button class=\"btn btn-primary btn-block\">搜索</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stars/stars.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stars/stars.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <!-- 样式绑定，[class.xxx] -->\n  <span *ngFor=\"let star of stars; let i=index\" class=\"glyphicon glyphicon-star\"\n  [class.glyphicon-star-empty]=\"star\" (click)=\"clickStar(i)\"></span>\n  <span>{{rating | number:'1.0-2'}}星</span>\n</p>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'product/:productId', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

//Routes: 路由配置，保存着哪个URL对应展示哪个组件，以及在哪个RouterOutlet中展示组件
//RouterOutlet：在Html中标记路由内容呈现位置的占位符指令
//Router：负责在执行时执行路由的对象，可以通过调用其navigate()和navigateByUrl方法来导航到一个指定的路由
//RouterLink：在Html中声明路由导航用的指令
//ActivedRoute：当前激活的路由对象，保存着当前路由的信息，如路由地址，路由参数等


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .carousel-container{\r\n    margin-bottom: 40px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jYXJvdXNlbC1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


//组件必备元素：装饰器（@Component），模板(Template)，控制器(Controller)【指被装饰器修饰的一个普通ts类】（包含组件的属性和方法，与模板进行数据绑定）
//可选的注入对象：输入属性(@Inputs)，提供器（providers），生命周期钩子
//可选的输出对象：样式表（styles），动画（Animations），输出属性（@Outputs），生命周期钩子
let AppComponent = 
//组件是Angular应用的基本构建块，你可以把一个组件理解为一段带有业务逻辑和数据的Html
//服务用来封装可重用的业务逻辑
//指令允许你向Html元素添加自定义行为
//模块用来将应用中不同的部分组织成一个Augular框架可以理解的单元
class AppComponent {
    //组件必备元素：装饰器（@Component），模板(Template)，控制器(Controller)【指被装饰器修饰的一个普通ts类】（包含组件的属性和方法，与模板进行数据绑定）
    //可选的注入对象：输入属性(@Inputs)，提供器（providers），生命周期钩子
    //可选的输出对象：样式表（styles），动画（Animations），输出属性（@Outputs），生命周期钩子
    constructor() {
        this.title = '慕课网Augular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
    //组件是Angular应用的基本构建块，你可以把一个组件理解为一段带有业务逻辑和数据的Html
    //服务用来封装可重用的业务逻辑
    //指令允许你向Html元素添加自定义行为
    //模块用来将应用中不同的部分组织成一个Augular框架可以理解的单元
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _stars_stars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stars/stars.component */ "./src/app/stars/stars.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipe/filter.pipe */ "./src/app/pipe/filter.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_web_socket_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/web-socket.service */ "./src/app/shared/web-socket.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        //这里只能声明组件，指令，管道
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
            _stars_stars_component__WEBPACK_IMPORTED_MODULE_10__["StarsComponent"],
            _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"]
        ],
        //AppModule依赖的其他模块
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            //想用响应式编程要引入这个模块
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            //要使用http服务要引入这个模块
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
        ],
        //模块中提供的服务
        //这里是提供器
        providers: [_shared_product_service__WEBPACK_IMPORTED_MODULE_13__["ProductService"], _shared_web_socket_service__WEBPACK_IMPORTED_MODULE_17__["WebSocketService"],
            //解决部署后访问商品详情页报错的问题，会生成localhost:8000/#/product/1这样的路径（#号是告诉浏览器先进入到localhost:8000这个地址上，
            //然后再通过angular路由进入到/product/1上，这样浏览器就不会误以为直接进入服务器的localhost:8000/product/1的这个路径）
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"] }
        ],
        //模块主组件
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);

//引入第三方依赖包要如下三步：
//1.npm install jquery --save    npm install bootstrap --save
//2.在angular.json的script标签中引入文件 ("./node_modules/jquery/dist/jquery.js","./node_modules/bootstrap/dist/js/bootstrap.js")
//在styles中引入"./node_modules/bootstrap/dist/css/bootstrap.css"
//3.安装类型文件以让typescript认识jq和bootstrap (npm install @types/jquery --save-dev    npm install @types/bootstrap --save-dev)
//课程目录
//1.angularjs和angular的架构介绍和对比
//2.搭环境，开始编写在线竞拍第一个版本
//3.路由和导航（1.路由基础知识 2.在路由时传递参数 3.路由高级特性）
//4.依赖注入（1.Angular对依赖注入的实现方式 2.Angular的提供器和注入器）
//5.绑定、响应式编程和管道（1.数据绑定 2.响应式编程 3.管道）
//6.组件间通讯（1.输入输出属性【父子组件】 2.中间人模式【实现两个没关系的组件间的松耦合】 3.组件生命周期）
//7.表单处理（1.模板式表单 2.响应式表单 3.表单校验）
//8.与服务器通讯（1.创建Web服务器【nodejs】 2.使用Http协议与服务器通讯 3.使用WebSocket协议与服务器通讯）
//9.构建与部署（1.构建和部署【构建：编译和合并，部署：与服务器整合】 2.多环境支撑【一套代码支持多种环境】）
//10.总结
//1.AngularJs的优点：模板功能强大丰富  比较完善的前端MVC框架   
//缺点：1.性能（双向数据绑定，在作用域中任何的操作都会引起dirty checking），而在Angular中默认是单向绑定，整个检查机制重写性能大大提升
//2.路由简单
//3.作用域把AngularJs执行环境和浏览器的环境隔离开，所有原生事件都不能影响AngularJs作用域，在作用域中不能用原生的事件
//Augular新特性：1.全新的命令行工具AngularCLI 2.服务器端渲染  3.移动和桌面兼容
//全局安装angularcli：npm install -g @angular/cli
//新建项目：ng new XXX
//运行项目：ng serve -o
//项目结构
//angular.json：工作区中所有项目的默认 CLI 配置，包括 CLI 使用的构建选项、运行选项、测试工具选项
//karma.conf.js：单元测试
//package.json：配置用于工作区中所有项目的包依赖项
//protractor.conf.js：端到端测试
//tslint.json：代码检查
//assets文件夹：包含图像文件和其它文件
//environments文件夹：包含针对特定目标环境的配置选项
//polyfills.ts：导入一些必要的库使Angular运行在一些老版本的浏览器里
//test.ts：单元测试的主入口点
//tsconfig.json：typescript编译器设置
//依赖注入：Dependency Injection（DI），描述的是手段
//控制反转：Inversion of Control（IOC），描述的是目的
//实现了控制反转模式的框架叫IOC容器
//@NgModule({
//providers:[ProductService] 等价于 providers:[{provider:ProductService,useClass:ProductService}] 或  providers:[{provider:ProductService,useFactory:()=>{...})}]
//注册一个类型是ProductService的token(provider)，当别的地方需要一个类型是ProductService的token时，实例化一个ProductService类注入给他
//})
//使用依赖注入也方便我们进行测试，例如我开发一个组件需要依赖到一个登录功能，而这个功能还没开发好，我们可以自己注入一个写死数据的服务给组件进行测试
//数据绑定
//使用插值表达式将一个表达式的值显示在模板上：<h1>{{productTitle}}</h1> 
//使用方括号将HTML标签的一个属性绑定到一个表达式上：<img [src]="imgUrl">
//使用小括号将组件控制器的一个方法绑定为模板上一个事件的处理器：<button (click)="toProductDetail($event)">商品详情</button>，<button (click)="saved=true"></button>
//默认是单向绑定，比如：控制器中productTitle的数据发生变化，那么界面上会显示变化后的数据
//但是如果我们通过jquery之类的库改变界面的值，控制器中的数据不会发生变化
//父子组件之间应该避免直接访问彼此的内部，而应该通过输入输出属性来通讯
//组件可以通过输出属性发射自定义事件，这些事件可以携带任何你想携带的数据
//在没有父子关系的组件之间，尽量使用中间人模式进行通讯
//父组件可以运行时投影一个或多个模板片段到子组件中
//每个angular组件都提供了一组生命周期钩子，供你在某些特定的事件发生时执行相应的逻辑
//angular的变更检测机制会监控组件属性的变化并自动更新视图。这个检测非常频繁并且默认是针对整个组件树的，所以实现相关钩子时要慎重
//你可以标记你的组件树中的一个分支，使其被排除在变更检测机制之外
//创建web服务器
//使用nodejs创建服务器（nodejs可以使用typescript来开发）
//使用Express创建restful的http服务
//监控服务器文件的变化
//应该异步的去执行http请求，异步http请求有多种实现方式：callback,promise,响应式编程（Observable，这是angular默认方式）
//ng build执行编译构建，完成后会生成一个dist文件夹
//部署：把dist底下的文件拷贝到之前写的node服务器底下的client文件夹（自己新建的）


/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarouselComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-container{\r\n    margin-bottom: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(list, filterField, keyword) {
        if (!filterField || !keyword) {
            return list;
        }
        return list.filter(item => {
            let fieldValue = item[filterField];
            return fieldValue.indexOf(keyword) >= 0;
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var _shared_web_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/web-socket.service */ "./src/app/shared/web-socket.service.ts");





let ProductDetailComponent = class ProductDetailComponent {
    //注入器会根据ActivatedRoute这个token去提供器里面找一个合适的类注入给routeInfo
    constructor(routeInfo, productService, wsService) {
        this.routeInfo = routeInfo;
        this.productService = productService;
        this.wsService = wsService;
        this.newRating = 5;
        this.newComment = '';
        this.isWatched = false;
    }
    ngOnInit() {
        let productId = this.routeInfo.snapshot.params['productId'];
        this.productService.getProduct(productId)
            .subscribe(product => {
            this.product = product;
            this.currentBid = product.price;
        });
        this.productService.getCommentsForProductId(productId)
            .subscribe(comments => this.comments = comments);
    }
    addComment() {
        let comment = new _shared_product_service__WEBPACK_IMPORTED_MODULE_3__["Comment"](0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
        this.comments.unshift(comment);
        //重新统计商品评分
        let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
        this.product.rating = sum / this.comments.length;
        //清空评论状态
        this.newComment = null;
        this.newRating = 5;
        this.isCommentHidden = true;
    }
    watchProduct() {
        if (this.subscription) {
            //这里只是把订阅取消了，但是ws连接还在，如果不断地来回点会造成内存泄漏，在web-socket.service.ts的定义Observable的最后加上return ()=>this.ws.close();就可以解决这个问题
            this.subscription.unsubscribe();
            this.isWatched = false;
            this.subscription = null;
        }
        else {
            this.isWatched = !this.isWatched;
            this.subscription = this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
                .subscribe(products => {
                let product = products.find(p => p.productId == this.product.id);
                this.currentBid = product.bid;
            });
        }
    }
};
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.component.html"),
        styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _shared_web_socket_service__WEBPACK_IMPORTED_MODULE_4__["WebSocketService"]])
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");




let ProductComponent = class ProductComponent {
    constructor(productService) {
        this.productService = productService;
        this.imgUrl = 'http://placehold.it/320x150';
        // this.titleFilter.valueChanges
        // .debounceTime(500)
        //   .subscribe(value => this.keyword = value);
    }
    ngOnInit() {
        this.products = this.productService.getProducts();
        //订阅搜索事件
        this.productService.searchEvent.subscribe(params => this.products = this.productService.search(params));
    }
};
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/shared/product.service.ts");




let SearchComponent = class SearchComponent {
    constructor(fb, productService) {
        this.productService = productService;
        this.formModel = fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)],
            price: [null, this.positiveNumberValidator],
            category: ['-1']
        });
    }
    ngOnInit() {
        this.categories = this.productService.getAllCategories();
    }
    positiveNumberValidator(control) {
        if (!control.value) {
            return null;
        }
        let price = parseInt(control.value);
        return price > 0 ? null : { positiveNumber: true };
    }
    onSearch() {
        if (this.formModel.valid) {
            console.log((this.formModel.value));
            //发射搜索事件
            this.productService.searchEvent.emit(this.formModel.value);
        }
    }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/shared/product.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/product.service.ts ***!
  \*******************************************/
/*! exports provided: ProductService, ProductSearchParams, Product, Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchParams", function() { return ProductSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getAllCategories() {
        return ["电子产品", "硬件设备", "图书"];
    }
    getProducts() {
        return this.http.get('/api/products');
    }
    getProduct(id) {
        return this.http.get('/api/products/' + id);
    }
    getCommentsForProductId(id) {
        return this.http.get('/api/products/' + id + '/comments');
    }
    search(params) {
        return this.http.get('/api/products', { params: this.encodeParams(params) });
    }
    encodeParams(params) {
        let result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        Object.keys(params)
            .filter(key => params[key])
            // .reduce((sum: HttpParams, key: string) => {
            //   sum.set(key, params[key]);
            //   return sum;
            // }, new HttpParams());
            .forEach(key => {
            result = result.set(key, params[key].toString());
        });
        return result;
    }
};
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);

class ProductSearchParams {
    constructor(title, price, category) {
        this.title = title;
        this.price = price;
        this.category = category;
    }
}
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


/***/ }),

/***/ "./src/app/shared/web-socket.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/web-socket.service.ts ***!
  \**********************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let WebSocketService = class WebSocketService {
    constructor() { }
    createObservableSocket(url, id) {
        //连接到ws服务器
        this.ws = new WebSocket(url);
        //定义一个流要定义三件事：1.什么时候发射下一个元素 2.什么时候抛一个异常 3.什么时候发出流结束信号
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            //当websocket接收到消息时流发送下一个元素
            this.ws.onmessage = (event) => observer.next(event.data);
            //当websocket出现问题的时候流抛出异常
            this.ws.onerror = (event) => observer.error(event);
            //当websocket关闭的时候流发结束信号
            this.ws.onclose = (event) => observer.complete();
            //当连接到ws服务器时发送商品id到服务器
            this.ws.onopen = (event) => this.sendMessage({ productId: id });
            //这里返回匿名函数用于关闭ws连接，当我们取消订阅的时候就会调用
            return () => this.ws.close();
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((msg) => JSON.parse(msg)));
    }
    //向ws服务器发送消息
    sendMessage(message) {
        this.ws.send(JSON.stringify(message));
    }
};
WebSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WebSocketService);



/***/ }),

/***/ "./src/app/stars/stars.component.css":
/*!*******************************************!*\
  !*** ./src/app/stars/stars.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzL3N0YXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/stars/stars.component.ts":
/*!******************************************!*\
  !*** ./src/app/stars/stars.component.ts ***!
  \******************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StarsComponent = class StarsComponent {
    constructor() {
        // 输入属性，他的值应该由外部传入
        this.rating = 0;
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.readonly = true;
    }
    ngOnInit() {
        // this.stars = [];
        // for (let i = 1; i <= 5; i++) {
        //   this.stars.push(i > this.rating);
        // }
    }
    ngOnChanges(changes) {
        this.stars = [];
        for (let i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    }
    clickStar(index) {
        if (!this.readonly) {
            this.rating = index + 1;
            //this.ngOnInit();
            this.ratingChange.emit(this.rating);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], StarsComponent.prototype, "rating", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], StarsComponent.prototype, "ratingChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], StarsComponent.prototype, "readonly", void 0);
StarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stars',
        template: __webpack_require__(/*! raw-loader!./stars.component.html */ "./node_modules/raw-loader/index.js!./src/app/stars/stars.component.html"),
        styles: [__webpack_require__(/*! ./stars.component.css */ "./src/app/stars/stars.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StarsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code\CommonProject\Front-End\ngtest\auction\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map