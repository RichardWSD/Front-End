<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld3/>
  </div>
</template>

<script>
import HelloWorld3 from './components/HelloWorld3'

export default {
  name: 'App',
  components: {
    HelloWorld3
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
