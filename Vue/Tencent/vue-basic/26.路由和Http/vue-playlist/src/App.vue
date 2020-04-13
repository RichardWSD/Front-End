<!-- 
  1.要先安装vue-router包：npm install vue-router --save-dev 
  2.使用vue自带的vue-resource来发http请求（后面讲用axios）：npm install vue-resource --save-dev
-->

<template>
  <div id="app">
    <ul>
      <!-- a标签有个问题，当我们点击他时页面是刷新的 -->
      <!-- <li><a href="/">Home</a></li>
      <li><a href="/helloworld">Hello</a></li> -->

      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/helloworld">Hello</router-link>
      </li>
    </ul>

    <!-- 告诉路由在哪里显示 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
h1 {
  color: purple;
}
</style>
