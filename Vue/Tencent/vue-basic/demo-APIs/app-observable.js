const state = Vue.observable({ count: 0 })

new Vue({
  el: '#app',
  render(h) {
    return h('button', {
      on: { click: () => { state.count++ }}
    }, `count is: ${state.count}`)
  }
})