<template>
  <div id="app">
    <span v-html="msg"></span>
    <!-- <h1 :class="$style.red">我是红色标题</h1> -->
    <button @click="addTitle">添加标题</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    addTitle() {
      this.msg = `<h1 class="red">我是红色标题</h1>`  
    }
  }
}
</script>

<style scoped>
/* 不加scoped动态添加的内容样式可以渲染出来 */
>>> .red {
  color: red;
}
</style>
