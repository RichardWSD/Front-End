import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherProductService } from './shared/another-product.service';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //声明在模块级别是对所有组件可用
  //声明在组件级别是对该组件及其子组件可用
  //声明在组件中的提供器与模块中的提供器相同时，组件中的会覆盖它
  providers: [{
    provide: ProductService, useFactory: (logger: LoggerService, appConfig, aa) => {
      if (appConfig.isDev) {
        console.log(aa);
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    //声明工厂方法所需要依赖的参数
    deps: [LoggerService, "APP_CONFIG", "TEST_CONFIG"]
  },
    LoggerService,
  { provide: "APP_CONFIG", useValue: { isDev: true } },
  { provide: "TEST_CONFIG", useValue: "aaa" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//注入器的层级关系：
//1.应用启动时，Angular会创建一个应用级注入器，将主模块中（包括主模块中导入的模块）声明的提供器都注册到这个注入器中
//2.启动主模块的主组件，然后应用级注入器会创建一个主组件注入器，会将主组件中声明的提供器注册到这个注入器中
//3.当启动主组件的子组件时，主组件注入器会创建子组件注入器，会将子组件中声明的提供器注册到这个注入器中
//以此类推...
//Angular框架只有构造函数一个注入点
