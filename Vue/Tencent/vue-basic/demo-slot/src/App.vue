<template>
  <div id="app">
    <FromHelper>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">这个是文本内容</p>
    </FromHelper>
  </div>
</template>

<script>
import FromHelper from './components/FromHelper.vue'

export default {
  name: 'app',
  components: {
    FromHelper
  },
  data(){
    return {
      title:"这个是title"
    }
  }
}
</script>

<style>
h2{
  background: lightgreen;
}
</style>
