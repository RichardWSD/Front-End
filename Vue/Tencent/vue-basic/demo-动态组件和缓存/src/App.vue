<template>
  <div id="app">
    <!-- keep-alive用于缓存组件,使用场景:
      1.我们在form-one填写数据后跳到form-two,然后再跳转回form-one时如果不希望数据被清空
      2.form-one请求数据渲染后跳到form-two,再跳回form-one时不希望再请求数据作渲染 -->
    <keep-alive>
        <component :is="component"></component>
    </keep-alive>
    <button @click="component='form-one'">Show form one</button>
    <button @click="component='form-two'">Show form two</button>
  </div>
</template>

<script>
import FormOne from './components/FormOne.vue'
import FormTwo from './components/FormTwo.vue'

export default {
  name: 'app',
  components: {
    "form-one":FormOne,
    "form-two":FormTwo
  },
  data(){
    return {
      component:"form-one"
    }
  }
}
</script>

<style>
h2{
  background: lightgreen;
}
</style>
