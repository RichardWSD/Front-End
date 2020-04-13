import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel: FormGroup = new FormGroup({
    userName: new FormControl("aaa"),
    dataRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    //FormArray来定义个数不定数量的数据。例如用户可以输入一个或多个邮箱信息
    emails: new FormArray([
      new FormControl('a@a.com'),
      new FormControl('b@b.com')
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);

  }

  addEmail(){
    let emails=this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }
}

//响应式表单指令
//类名                  指令
//FormGroup             formGroup, formGroupName
//FormControl           formControl, formControlName
//FormArray             formArrayName