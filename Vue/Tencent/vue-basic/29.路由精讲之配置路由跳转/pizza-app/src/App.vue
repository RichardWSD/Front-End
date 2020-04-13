<!-- 
    1.这次使用另一个模板创建项目：vue init webpack-simple pizza-app 
    2.安装路由模块：npm install vue-router --save
-->

<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
</style>
