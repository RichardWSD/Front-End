import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
//三级路由
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

export const routes=[
    //展示多个组件用components
    {path:'/',name:'homeLink',components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }},
    {path:'/menu',name:'menuLink',component:Menu},
    
    {path:'/admin',name:'adminLink',component:Admin
    //路由独享守卫
    // ,beforeEnter:(to,from,next)=>{
    //   //alert('非登录状态，不能访问此页面');
    //   //next();
    // }
  },
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
  ]
