// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  },
  // extend和组件中data必须声明成函数形式，否则会报错
 /*  data: {
    firstName: 'Walter',
    lastName: 'White',
    alias: 'Heisenberg'
  } */
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')