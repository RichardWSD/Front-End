<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { provide } from 'vue'
import mitt from 'mitt'
const emitter = mitt()
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  provide(){
    return {
      emitter
    }
  },
  mounted () {
    emitter.on('helloworld', msg => {
      console.log(msg);
      
    });
  },
}
</script>
