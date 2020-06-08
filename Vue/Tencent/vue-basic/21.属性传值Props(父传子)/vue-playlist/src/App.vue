<template>
  <div id="app">
    <app-header></app-header>
    <div>父文本值:{{strPar}}</div>
    <!-- 父向子组件传值 -->
    <users v-bind:users="users" isB :str-child="strPar"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
//局部注册组件
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      //title: "这是我的第一个vue脚手架项目"
      users:[
        {name:'Henry',position:'Web开发',show:false},
        {name:'Henry',position:'Web开发',show:false},
        {name:'Henry',position:'Web开发',show:false},
        {name:'Henry',position:'Web开发',show:false},
        {name:'Henry',position:'Web开发',show:false},
        {name:'Henry',position:'Web开发',show:false},
        {name:'Henry',position:'Web开发',show:false},
        {name:'Henry',position:'Web开发',show:false},
        {name:'Henry',position:'Web开发',show:false}
     ],
     strPar: 'p-abc'
    };
  },
  //注册组件
  components: {
    "users": Users,
    "app-header":Header,
    "app-footer":Footer
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
