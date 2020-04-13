import { Component, OnInit, AfterContentChecked, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterContentInit,AfterContentChecked,OnDestroy {

  ngOnDestroy(): void {
    console.log('child1组件被销毁');
    
  }

  ngAfterContentInit(): void {
    console.log('子组件投影内容初始化完毕');
  }
  ngAfterContentChecked(): void {
    console.log('子组件child1投影内容变更检测完毕');
  }

  constructor() { }

  ngOnInit() {
  }

}
