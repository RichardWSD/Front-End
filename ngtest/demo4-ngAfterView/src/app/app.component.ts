import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  //通过ViewChild装饰器在父组件中获得子组件的引用
  @ViewChild('child1',{static:true})
  child1: ChildComponent;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.child1.greeting('Tom');
    }, 5000);
  }

  //ngAfterView方法是在组件模板已经呈现给用户看之后触发的
  ngAfterViewInit() {
    console.log('父组件的视图初始化完毕');
    //注意不能在ngAfterViewInit或者ngAfterViewChecked方法中给模板绑定的变量重新赋值
    //因为这时视图组装已经完毕，Angular禁止在视图组装好之后再去更新视图
    //this.title = 'demo4';
    //只能在另一个js运行周期中去更新
    setTimeout(() => {
      this.title = 'demo4';
    }, 0);
  }

  ngAfterViewChecked() {
    console.log('父组件的视图变更检测完毕');
  }
}
