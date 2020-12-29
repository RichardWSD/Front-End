Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data() {
    return {
      msg: {
        val: 'hhh'
      }
    }
  },
  methods: {
    del() {
      Vue.delete(this.msg, 'val');
    }
  }
})