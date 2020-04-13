import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './shared/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { WebSocketService } from './shared/web-socket.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  //这里只能声明组件，指令，管道
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductComponent,
    SearchComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  //AppModule依赖的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //想用响应式编程要引入这个模块
    ReactiveFormsModule,
    //要使用http服务要引入这个模块
    HttpClientModule
  ],
  //模块中提供的服务
  //这里是提供器
  providers: [ProductService, WebSocketService,
    //解决部署后访问商品详情页报错的问题，会生成localhost:8000/#/product/1这样的路径（#号是告诉浏览器先进入到localhost:8000这个地址上，
    //然后再通过angular路由进入到/product/1上，这样浏览器就不会误以为直接进入服务器的localhost:8000/product/1的这个路径）
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  //模块主组件
  bootstrap: [AppComponent]
})
export class AppModule { }

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
//要让程序运行在某个环境下，package.json的start参数改成ng serve --env=prod
