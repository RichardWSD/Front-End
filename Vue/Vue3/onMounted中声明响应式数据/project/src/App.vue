<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useRos } from './components/useRos'
// let rc = 2;
// let c = () => {}
let rosRes = reactive({
/*   rosCount: 0,
  count: () => {} */
})

onMounted(() => {
  const ros = useRos()
  rosRes = reactive({...ros})

/*   rosRes.rosCount = ros.rosCount
  rosRes.count = ros.count */

  // rosRes = reactive(ros)

  // rc = ros.rosCount
  // c = ros.count
  // console.log(rc, c)
})
</script>

<template>
   <h1>{{ msg }}</h1>
  <button type="button" @click="rosRes.count">count is: {{ rosRes.rosCount }}</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
