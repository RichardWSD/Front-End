import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileValidator } from 'src/validator/validators';

// 指令跟组件很像，只是没有模板
@Directive({
  //方括号表示指令要作为属性来用
  selector: '[mobile]',
  //将mobileValidator方法包装成一个指令，注意这里的provide这个token是固定写这个的
  //multi表示同一个token可以绑多个值
  providers: [{ provide: NG_VALIDATORS, useValue: mobileValidator, multi: true }]
})
export class MobileValidatorDirective {

  constructor() { }

}
