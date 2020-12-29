var res = Vue.compile('<div><span>{{ msg }}</span></div>')

new Vue({
  el: '#app',
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns,
})

console.log(res);