import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  ngDoCheck(): void {
    if (this.user.name !== this.oldUserName) {
      this.changeDetected = true;
      console.log('DoCheck:user.name从' + this.oldUserName + '变为' + this.user.name);
      this.oldUserName = this.user.name;
    }
    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount++;
      console.log('DoCheck:user.name没变化时ngDoCheck方法已经被调用' + this.noChangeCount+'次');
    }

    this.changeDetected = false;
  }

  //注意可变对象和不可变对象的区别
  //greeting的值变化时会触发这个方法
  //但是user对象的name值发生变化时不会触发这个方法，因为Angular不会关注这个user对象的name属性的变化
  //这个英雄对象的引用没有发生变化，于是从Angular的视角看来，也就没有什么需要报告的变化了
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  @Input()
  greeting: string;
  @Input()
  user: { name: string };
  message: string = '初始化消息';
  oldUserName: string;
  changeDetected: boolean = false;
  noChangeCount: number = 0;

  constructor() { }

  //在这里初始化除了输入属性的其他属性
  ngOnInit() {
  }

}
