Vue.component('parent', {
  template: `
  <div>
      父组件
      <child></child>
  </div>
  `,
  provide: {
    foo: 'bar',
    // bar: 'hhh'
  },
  components: {
      'child': {
        // inject: ['foo'], 
        /* inject: {
          foo: { default: 'xxx' }
        }, */
        inject: {
          foo: {
            from: 'bar',
            default: 'xxx'
          }
        },
        created () {
          console.log(this.foo) // => "bar"
        },
        template: `<div>
                    <div>我是子组件   {{foo}}</div>
                  </div>`
      }
  }
})

let app = new Vue({
  el: '#app'
})