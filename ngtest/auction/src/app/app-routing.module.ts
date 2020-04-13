import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Routes: 路由配置，保存着哪个URL对应展示哪个组件，以及在哪个RouterOutlet中展示组件
//RouterOutlet：在Html中标记路由内容呈现位置的占位符指令
//Router：负责在执行时执行路由的对象，可以通过调用其navigate()和navigateByUrl方法来导航到一个指定的路由
//RouterLink：在Html中声明路由导航用的指令
//ActivedRoute：当前激活的路由对象，保存着当前路由的信息，如路由地址，路由参数等
