import { Component, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {

  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕');
    //在ngAfterContentInit和ngAfterContentChecked可以对模板绑定的内容进行修改
    //因为在这里只是被投影的内容组装完毕了而已
    this.title = 'demo5';
  }
  ngAfterContentChecked(): void {
    console.log('父组件投影内容变更检测完毕');
  }
  ngAfterViewInit(): void {
    console.log('父组件视图内容初始化完毕');
  }

  title = '';
  divContent = "<div>慕课网</div>";
}
