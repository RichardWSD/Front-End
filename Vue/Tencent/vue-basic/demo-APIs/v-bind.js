Vue.component('parent-com', {
  template: `
  <div>
      我是父组件
      <childcom v-bind="$props"></childcom>
  </div>
  `,
  props: ['text', 'msg'],
  components: {
      'childcom': {
          template: `<div>我是子组件</div>`,
          props: ['text'],
          created() {
            console.log('子: ', this.$props);
          }
      }
  },
  created() {
    // $props获取的是组件定义的props
    console.log('父: ', this.$props);
  }
})

var vm = new Vue({
  el:'#app',
  data: {
    text: 'hhhhh'
  }
})