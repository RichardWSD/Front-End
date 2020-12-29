Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.error('errorHandler', err, vm, info);
}

new Vue({
  el: '#app',
  mounted() {
    throw new Error('自定义错误')
  },
  methods: {
    handle() {
      throw new Error('自定义click错误')
    }
  }
})