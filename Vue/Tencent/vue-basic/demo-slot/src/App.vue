<template>
  <div id="app">
    <!-- <FromHelper>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">这个是文本内容</p>
    </FromHelper> -->
    <span>伏组件</span>
    <SlotDemo1>
      <span>组件里面的title数据：{{title}}</span>
    </SlotDemo1> 
  </div>
</template>

<script>
// import FromHelper from './components/FromHelper.vue'
import SlotDemo1 from './components/SlotDemo1'

export default {
  name: 'app',
  components: {
    // FromHelper,
    SlotDemo1
  },
  data(){
    return {
      title:"这个是title"
    }
  }
}
</script>

<style scoped>
h2{
  background: lightgreen;
}
span {
  color: red;
}
</style>
