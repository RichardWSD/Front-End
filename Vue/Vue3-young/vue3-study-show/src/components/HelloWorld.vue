<template>
  <h1>{{ msg }}</h1>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>Hello, vite!!!</p>
  <!-- composition -->
  <!-- <Composition></Composition> -->

  <!-- Teleport: ModalButton -->
  <ModelButton></ModelButton>

  <!-- Emits选项 -->
  <Emits @my-click="onClick"></Emits>

  <!-- 实例方法定义组件 -->
  <comp></comp>

  <!-- v-model的使用 -->
  <VmodelTest v-model:counter="counter"></VmodelTest>
  <!-- 等效于 -->
  <!-- <VmodelTest :counter="counter" @update:counter="counter=$event"></VmodelTest> -->

  <!-- render api发生变化 -->
  <RenderTest v-model:counter="counter">
    <template v-slot:default>title</template>
    <template v-slot:content>content....</template>
  </RenderTest>

  <!-- 函数式组件 -->
  <Functional level="3">这是一个动态h元素</Functional>

  <!-- 异步组件 -->
  <AsyncComp></AsyncComp>

  <!-- 自定义指令
   -->
  <p v-highlight="'green'">highlight this text!!!</p>

  <!-- 动画 -->
  <TransitionTest></TransitionTest>

  <!-- 编程方式发送和监听事件 -->
  <button @click="sendMsg">emit event</button>
</template>

<script>
import {
  reactive,
  computed,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch,
  h,
  defineAsyncComponent,
} from "vue";
import Composition from "./Composition.vue";
import ModelButton from "./ModelButton.vue";
import VmodelTest from "./VmodelTest.vue";
import RenderTest from "./RenderTest.vue";
import Emits from "./Emits.vue";
import Functional from "./Functional.vue";
import TransitionTest from "./TransitionTest.vue";

// 事件派发和监听
import mitt from 'mitt'

export const emitter = mitt()

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      counter: 1,
    };
  },
  components: {
    Composition,
    ModelButton,
    Emits,
    VmodelTest,
    RenderTest,
    Functional,
    AsyncComp: defineAsyncComponent(() => import("./NextPage.vue")),
    TransitionTest
  },
  methods: {
    onClick() {
      console.log("click me!");
    },
    sendMsg() {
      emitter.emit('someEvent', 'foooo')
    }
  },
};
</script>
