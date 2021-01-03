new Vue({
  el: '#app',
  data: {
    b: 'hello',
    e: ''
  },
  watch: {
    b: 'bChange',
    e: [
      function handle2 (val, oldVal) {
        console.log('e change handle2');
      },
      {
        handler: function handle3 (val, oldVal) {
          console.log('e change handle3');
        }
      }
    ]
  },
  methods: {
    bChange() {
      console.log('bChange');
    }
  }
})