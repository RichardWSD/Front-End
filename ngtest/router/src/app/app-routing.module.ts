import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';
import { ProductResolve } from './guard/product.resolve';

const routes: Routes = [
  //不能用/开头
  //路由器使用先匹配者优先的规则，所以通配符应该放最后
  { path: '', redirectTo: '/home', pathMatch: 'full' },//路由重定向
  { path: 'chat', component: ChatComponent, outlet: 'aux' },//这个组件只会显示在名为aux的router-outlet上
  { path: 'home', component: HomeComponent },
  //在路由路径中传递参数
  {
    path: 'product/:id', component: ProductComponent, children: [
      //配置子路由
      { path: '', component: ProductDescComponent },
      { path: 'seller/:id', component: SellerInfoComponent }
    ],
    // canActivate: [LoginGuard],//现在ProductComponent组件就被LoginGuard守卫保护起来了，注意要数组中定义的所有守卫都返回true时才能进入
    // canDeactivate: [UnsavedGuard]
    resolve: {
      product: ProductResolve //到时候product就会作为路由数据（ProductResolve返回的是一个Product实例）传递给即将要进入的组件
    }
  },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]//注意这里要提供LoginGuard
})
export class AppRoutingModule { }

//在路由时传递数据
//在查询参数中传递数据：/product?id=1&name=2  =>  ActivatedRoute.queryParams[id]
//在路由路径中传递数据：{ path: '/product/:id'} =>  /product/1  => ActivatedRoute.queryParams[id]
//在路由配置中传递数据：{ path: 'product', component: ProductComponent, data:[{isProd:true}] } => ActivatedRoute.data[0][isProd]

//辅助路由，是兄弟关系的
//<router-outlet></router-outlet>
//<router-outlet name='aux'></router-outlet>
//{ path: 'xxx', component: XxxComponent, outlet:'aux' }
//{ path: 'yyy', component: YyyComponent, outlet:'aux' }
//<a [routerlet]="['/home',{outlets:{aux:'xxx'}}]"></a>   路由到这里时，页面不仅会显示HomeComponent的内容，还会显示XxxComponent的内容
//<a [routerlet]="['/product',{outlets:{aux:'yyy'}}]"></a>

//路由守卫
//只有当用户已经登录并拥有某些权限时才能进入某些路由
//一个由多个表单组件组成的向导，例如注册流程，用户只有在当前路由的组件中填写了满足要求的信息才可以导航到下一个路由
//当用户未执行保存操作而试图离开当前导航时提醒用户
//CanActivate：处理导航到某路由的情况
//CanDeactivate：处理从当前路由离开的情况
//Resolve：在路由激活之前获得路由数据（例如，在进入某个详情组件的时候我们根据获取的id去请求数据，但由于后台获取数据有延迟那么会容易在页面
//渲染完成之前数据还没返回，那么页面数据就显示不出来；resolve守卫可以让我们进入组件之前就获取到id数据，然后去后台请求，请求成功之后进入组件，
//如果请求失败那么我们可以根据需要返回错误页）


