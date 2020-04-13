import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log('hello ' + name);

  }

  //ngAfterView方法是在组件模板已经呈现给用户看之后触发的
  ngAfterViewInit() {
    console.log('子组件的视图初始化完毕');

  }

  ngAfterViewChecked() {
    console.log('子组件的视图变更检测完毕');
  }
}
