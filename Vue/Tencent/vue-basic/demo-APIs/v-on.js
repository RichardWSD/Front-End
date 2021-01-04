/* 
用在普通元素上时，只能监听原生 DOM 事件。
用在自定义元素组件上时，还可以监听子组件触发的自定义事件

在监听原生 DOM 事件时，方法以事件为唯一的参数。
如果使用内联语句，语句可以访问一个 $event property：v-on:click="handle('ok', $event)"

从 2.4.0 开始，v-on 同样支持不带参数绑定一个事件/监听器键值对的对象。注意当使用对象语法时，是不支持任何修饰器的
*/

var vm = new Vue({
  el:'#app',
  methods: {
    click(msg, e){
      console.log(msg, e);
    },
    mousedown() {
      console.log('down');
    },
    mouseup() {
      console.log('up');
    }
  }
})