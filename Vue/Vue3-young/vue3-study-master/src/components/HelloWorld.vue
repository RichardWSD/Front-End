<template>
  <h1>{{ msg }}</h1>
  <p>{{fooo}}</p>
  <button @click="count++;foo.bar++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>Hello, vite!!!</p>
  <ModelButton></ModelButton>

  <CustomEvent @click="onclick"></CustomEvent>

  <comp></comp>
  
  <Functional level="3">这是一个h3</Functional>

  <table>
    <Row></Row>
  </table>

  <my-link to="/about">联系我</my-link>

  <TransitionTest></TransitionTest>
</template>

<script>
// import Axios from 'axios'
import {reactive, toRefs, onMounted, defineAsyncComponent, h, inject} from 'vue'
import ModelButton from './ModelButton.vue';
import CustomEvent from './CustomEvent.vue';
import Functional from './Functional';
import MyLink from './MyLink.vue';
import TransitionTest from './Transition.vue';

export default {
  name: 'HelloWorld',
  components:{
    ModelButton, CustomEvent, Functional, MyLink,
    TransitionTest,
    Row: {
      render(){
        return h('tr', 'aaaaaaaaaaaa')
      }
    }
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      foo: {
        bar: 1
      }
    }
  },
  methods: {
    onclick() {
      console.log('click CustomEvent');
      this.emitter.emit('helloworld', 'some message')
    }
  },
  mounted () {
    this.$watch(()=>this.foo.bar, (v1, v2) => {
      console.log(this.foo.bar);
    });
  },
  inject: ['emitter']
}
</script>
