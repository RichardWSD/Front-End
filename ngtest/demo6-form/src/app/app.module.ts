import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './reactive-regist/reactive-regist.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveRegistComponent,
    MobileValidatorDirective,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //模板式表单需要需要引入这个模块
    FormsModule,
    //响应式表单需要引入这个模块
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Angular表单API
//模板式表单：表单的数据模型是通过组件模板中的相关指令来定义的，因为使用这种方式定义表单的数据模型时，我们会受限于HTML的语法。
//所以，模板驱动方式只适合用于一些简单的场景（NgForm,NgModel,NgModelGroup）
//响应式表单：使用响应式表单时，你通过编写TypeScript代码而不是Html代码来创建一个底层的数据模型。在这个模型定义好以后，你使用一些特定的
//指令，将模板上的html元素与底层的数据模型连接在一起

//不管是哪种表单，都有一个对应的数据模型来存储表单的数据。在模板式表单中，数据模型是由angular基于你组件模板中的指令隐式创建的。
//而在响应式表单中，你通过编码明确的创建数据模型然后将模板上的html元素与底层的数据模型连接在一起

//数据模型并不是一个任意的对象，它是一个由angular/forms模块中的一些特定的类，如FormControl，FormGroup，FormArray等组成。
//再模板式表单中，你是不能直接访问到这些类的

//响应式表单并不会替你生成HTML，模板仍然需要你自己来编写
//响应式表单可以用于web开发，手机开发等，而模板式表单只用于web开发

