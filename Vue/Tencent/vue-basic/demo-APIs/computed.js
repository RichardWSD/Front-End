Vue.component('parent-com', {
  template: `
  <div>
      我是父组件{{p1}}
      <childcom></childcom>
  </div>
  `,
  components: {
      'childcom': {
          template: `<div>
                      <div>我是子组件{{c1}}</div>
                  </div>`,
          computed: {
            c1: vm => {
              console.log('子组件vm', vm);
              console.log('子组件this', this);
            }
          }
      }
  },
  computed: {
    p1: vm => {
      console.log('父组件vm', vm);
      console.log('父组件this', this);
    }
  }
})

var vm = new Vue({
  el: '#app'
})