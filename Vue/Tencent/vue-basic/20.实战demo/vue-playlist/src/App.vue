<template>
  <div id="app">
    <app-header></app-header>
    <users></users>
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
      title: "这是我的第一个vue脚手架项目"
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
