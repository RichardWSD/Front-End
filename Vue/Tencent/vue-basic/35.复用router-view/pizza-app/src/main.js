import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)

//配置路由
const router=new VueRouter({
  routes,
    // 去除地址栏上的#
    mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
