import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter)

//配置路由
const router=new VueRouter({
  routes:[
    {path:'/',name:'homeLink',component:Home},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin/:id',name:'adminLink',component:Admin},
    {path:'/about',name:'aboutLink',component:About},
    {path:'/login',name:'loginLink',component:Login},
    {path:'/register',name:'registerLink',component:Register},
    {path:'*', redirect:'/'}
  ],
  // 去除地址栏上的#
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
