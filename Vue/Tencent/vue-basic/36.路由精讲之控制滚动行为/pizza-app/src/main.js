import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)

//配置路由
const router=new VueRouter({
  routes,
    // 去除地址栏上的#
    mode:'history',
    scrollBehavior(to,from,savedPosition){
      //return {x:0,y:100};
      //return {selector:'.btn'};

      //savedPosition在按下浏览器 后退/前进 按钮时，返回上一个页面离开时的位置
      if(savedPosition){
        return savedPosition;
      }else{
        return {x:0,y:0};
      }
    }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
