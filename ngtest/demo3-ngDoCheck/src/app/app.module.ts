import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//组件初始化                               组件销毁
//constructor                             ngOnDestroy
//ngOnChanges（如果组件没有输入属性那么这个方法永远不会被调用，在初始化或者修改组件的输入属性时调用）
//ngOnInit                                变化检测
//ngDoCheck                               ngOnChanges
//ngAfterContentInit                      ngDoCheck
//ngAfterContentChecked                   ngAfterContentChecked
//ngAfterViewInit                         ngAfterViewChecked
//ngAfterViewChecked

//Angular的变更检测机制是由zone.js实现的，保证组件属性的变化和页面的变化是同步的
//浏览器发生的任何异步事件都会触发变更检测，比如点击按钮，输入数据等
//如果组件的属性发生改变，那么与其绑定的模板的相应区域可能需要被更新
//变更检测机制只是将组件属性的改变反应到模板上
//有两种变更检测策略
//Default策略：不管变更发生在组件树中的哪个组件上，zone.js都会检测整个组件树
//OnPush策略：如果某个组件声明自己的策略是OnPush，那么只有当这个组件的输入属性发生变化时，zone.js才会检查这个组件及其子组件
//检查都是从组件树的根组件开始往下检查的

//在constructor，ngOnChanges，ngOnInit，ngDoCheck 之后，组件所需的值已经全部赋值完毕
//ngAfterContentInit，ngAfterContentChecked  之后如果有子组件那么会再进行子组件的初始化流程
//然后最后是ngAfterViewInit ，ngAfterViewChecked
//在路由进行跳转的时候，前一个组件会进行销毁，后一个组件会进行创建
