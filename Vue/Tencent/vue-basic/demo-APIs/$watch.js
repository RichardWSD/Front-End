let vm = new Vue({
  el: '#app',
  data: {
    b: 'hello',
    e: '',
    a: 1,
    b: 2
  }
});

vm.$watch(
  function () {
    // 表达式 `this.a + this.b` 每次得出一个不同的结果时
    // 处理函数都会被调用。
    // 这就像监听一个未被定义的计算属性
    return this.a + this.b
  },
  function (newVal, oldVal) {
    // 做点什么
    console.log(`newVal：${this.a}, oldVal：${oldVal}`);
  }
)