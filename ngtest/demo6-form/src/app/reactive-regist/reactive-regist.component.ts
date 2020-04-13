import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { mobileValidator, equalValidator, mobileAsyncValidator } from 'src/validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  formModel: FormGroup;

  //FormBuilder 服务有三个方法：control()、group() 和 array()。这些方法都是工厂方法，用于在组件类中分别生成 FormControl、FormGroup 和 FormArray
  constructor(fb: FormBuilder) {
    //第二个参数可以校验这个formGroup
    //fb.group({},{})
    this.formModel = fb.group({
      //每个控件名对应的值都是一个数组，这个数组中的第一项是其初始值，第二项和第三项提供同步和异步验证器
      //angular自带的校验器
      userName: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator,mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, { validator: equalValidator })
    });
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get('userName').valid;
    let errors: any = this.formModel.get('userName').errors;
    console.log('userName的校验结果是：' + isValid);
    console.log('userName的错误信息是：' + JSON.stringify(errors));
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }

  }

  ngOnInit() {
  }

}
