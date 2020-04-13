import { Component } from '@angular/core';

//组件必备元素：装饰器（@Component），模板(Template)，控制器(Controller)【指被装饰器修饰的一个普通ts类】（包含组件的属性和方法，与模板进行数据绑定）
//可选的注入对象：输入属性(@Inputs)，提供器（providers），生命周期钩子
//可选的输出对象：样式表（styles），动画（Animations），输出属性（@Outputs），生命周期钩子
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//组件是Angular应用的基本构建块，你可以把一个组件理解为一段带有业务逻辑和数据的Html
//服务用来封装可重用的业务逻辑
//指令允许你向Html元素添加自定义行为
//模块用来将应用中不同的部分组织成一个Augular框架可以理解的单元
export class AppComponent {
  title = '慕课网Augular';

}
