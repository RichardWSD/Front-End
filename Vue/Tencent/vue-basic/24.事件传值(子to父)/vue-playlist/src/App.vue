<template>
  <div id="app">
    <!-- 子向父通过事件传值 -->
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <!-- 父向子组件传值 -->
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
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
      title: "传递的是一个值，(number,string,boolean)",
      users: [
        { name: "Henry", position: "Web开发", show: false },
        { name: "Henry", position: "Web开发", show: false },
        { name: "Henry", position: "Web开发", show: false },
        { name: "Henry", position: "Web开发", show: false },
        { name: "Henry", position: "Web开发", show: false },
        { name: "Henry", position: "Web开发", show: false },
        { name: "Henry", position: "Web开发", show: false },
        { name: "Henry", position: "Web开发", show: false },
        { name: "Henry", position: "Web开发", show: false }
      ]
    };
  },
  //注册组件
  components: {
    users: Users,
    "app-header": Header,
    "app-footer": Footer
  },
  methods: {
    updateTitle: function(title) {
      this.title = title;
    }
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
