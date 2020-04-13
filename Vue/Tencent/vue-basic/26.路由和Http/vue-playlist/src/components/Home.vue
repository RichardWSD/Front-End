<!-- 
  1.要先安装vue-router包：npm install vue-router --save-dev 
-->

<template>
  <div id="home">
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
import Users from "./Users";
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "home",
  data() {
    return {
      title: "传递的是一个值，(number,string,boolean)",
      // 使用jsonplaceholder这个网站的数据
      users: [
        // { name: "Henry", position: "Web开发", show: false },
        // { name: "Henry", position: "Web开发", show: false },
        // { name: "Henry", position: "Web开发", show: false },
        // { name: "Henry", position: "Web开发", show: false },
        // { name: "Henry", position: "Web开发", show: false },
        // { name: "Henry", position: "Web开发", show: false },
        // { name: "Henry", position: "Web开发", show: false },
        // { name: "Henry", position: "Web开发", show: false },
        // { name: "Henry", position: "Web开发", show: false }
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
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/users')
    .then((data)=>{
      console.log(data);
      this.users=data.body;
    })
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
