new Vue({
  render (h) {
    throw new Error('oops')
  },
  // 只在开发者环境下工作
  renderError (h, err) {
    return h('pre', { style: { color: 'red' }}, err.stack)
  }
}).$mount('#app')