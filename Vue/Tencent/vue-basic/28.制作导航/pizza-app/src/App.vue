<!-- 这次使用另一个模板创建项目：vue init webpack-simple pizza-app -->

<template>
  <div id="app" class="container">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components:{
    appHeader:Header
  }
}
</script>

<style>

</style>
