var vm = new Vue({
  el:'#app',
  data: {
    text: 'hhhhh'
  },
  methods: {
    getRef() {
      console.log(this.$refs);
    }
  }
})