<template>
  <div id="app">
    <h1>{{title}}</h1>
    <h2>我是父h2</h2>
    <users></users>
    <HelloWorld>
      <span>我是占位符内容</span>
    </HelloWorld>
  </div>
</template>

<script>
//局部注册组件
import Users from "./components/Users";
import HelloWorld from "./components/HelloWorld"

export default {
  name: "App",
  data() {
    return {
      title: "这是我的第一个vue脚手架项目"
    };
  },
  //注册组件
  components: {
    users: Users,
    HelloWorld
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}

/* div h2{
  color: red;
} */

div /deep/ h2{
  color: red;
}

span {
  color: green;
}
</style>
