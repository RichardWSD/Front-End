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

//三级路由
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//配置路由
const router=new VueRouter({
  routes:[
    {path:'/',name:'homeLink',component:Home},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin',name:'adminLink',component:Admin},
    //这里的redirect是默认选择的路由
    {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
      {path:'/about/contact',name:'contactLink',redirect:'/personname',component:Contact,children:[
        {path:'/phone',name:'phoneNumber',component:Phone},
        {path:'/personname',name:'personName',component:PersonName},
      ]},
      {path:'/history',name:'historyLink',component:History},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
    ]},
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
