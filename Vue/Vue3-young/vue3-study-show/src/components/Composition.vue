<template>
  <p>{{ counter }}</p>
  <p>{{ doubleCounter }}</p>
  <p ref="desc"></p>
</template>

<script>
import { reactive, computed, onMounted, onUnmounted, ref, toRefs, watch } from "vue";
export default {
  setup() {
    // counter相关
    const {counter, doubleCounter} = useCounter()

    // 其他数据，单值响应式
    const msg2 = ref("some message");

    // 使用元素引用
    const desc = ref(null)

    // 侦听器
    watch(counter, (val, oldVal) => {
      const p = desc.value
      p.textContent = `counter change from ${oldVal} to ${val}`
    })

    return { counter, doubleCounter, msg2, desc };
  },
};

function useCounter() {
  const data = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2),
  });

  let timer;

  onMounted(() => {
    timer = setInterval(() => {
      data.counter++;
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  return toRefs(data)
}
</script>
