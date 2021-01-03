Vue.component('my-component',{
  render: function (createElement) {
    return createElement('div',[createElement('div',{domProps:{innerHTML:'this child div'}}),
      this.$scopedSlots.default({
        text:'hello world'
      }),
      this.$scopedSlots.another({
        text:'another hello world'
      })
    ])
  }
})

var vm = new Vue({
  el:'#app',
})