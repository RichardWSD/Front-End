import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

//自定义校验器
export function mobileValidator(control: FormControl): any {
  let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(control.value);
  console.log('mobile的校验结果是：' + valid);
  //返回null值就是检验通过
  return valid ? null : { mobile: true };
}

export function mobileAsyncValidator(control: FormControl): any {
  let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(control.value);
  console.log('mobile的校验结果是：' + valid);
  //返回null值就是检验通过
  //异步校验器返回一个可观测的流，延迟5秒模拟服务器调用
  return of(valid ? null : { mobile: true }).pipe(delay(5000));
}

export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let pconfirm: FormControl = group.get('pconfirm') as FormControl;
  if (password === null || pconfirm === null) {
    return { equal: { desc: '密码和确认密码不匹配' } };
  }
  let valid: boolean = (password.value === pconfirm.value);
  console.log('密码校验结果：' + valid);
  return valid ? null : { equal: { desc: '密码和确认密码不匹配' } };
}