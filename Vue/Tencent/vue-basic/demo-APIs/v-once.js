var vm = new Vue({
  el:'#app',
  data: {
    msg: 'xxxx'
  },
  methods: {
    change() {
      this.msg = 'yyyy';
    }
  }
})