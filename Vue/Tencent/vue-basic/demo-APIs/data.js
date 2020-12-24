var data = { a: 1 }

// 直接创建一个实例
// 如果你为 data property 使用了箭头函数，则 this 不会指向这个组件的实例，
// 不过你仍然可以将其实例作为函数的第一个参数来访问：data: vm => ({ a: vm.myProp })
var vm = new Vue({
  el: '#app',
  data: data
})
vm.a // => 1
vm.$data === data // => true

// Vue.extend() 中 data 必须是函数
var Component = Vue.extend({
  data: function () {
    return { a: 1 }
  }
})