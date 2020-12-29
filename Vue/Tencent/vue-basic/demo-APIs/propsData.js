var Comp = Vue.extend({
  props: ['msg'],
  template: '<div>{{ msg }}</div>'
})

// 只用于 new 创建的实例中
var vm = new Comp({
  propsData: {
    msg: 'hello'
  }
})