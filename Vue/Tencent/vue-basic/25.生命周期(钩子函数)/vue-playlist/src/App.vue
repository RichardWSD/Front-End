<template>
  <div id="app">
    <!-- 子向父通过事件传值 -->
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <!-- 父向子组件传值 -->
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <button @click="toggleFooter">点击显示/隐藏footer</button>
    <!-- <app-footer ref="footer" v-if="showFooter" v-bind:title="title" @click.native="clickFooter"></app-footer> -->
    <app-footer ref="footer" v-if="showFooter" v-bind:title="title" @click.native="clickFooter" @click222="clickFooter222"></app-footer>
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
      ],
      showFooter: false
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
    },
    toggleFooter(){
      // this.showFooter = !this.showFooter;
      this.$refs.footer.$destroy();
    },
    clickFooter(){
      console.log('clickFooter')
    },
    clickFooter222(){
      console.log('clickFooter222')
    }
  },
  created(){
    console.log('footer created')
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
