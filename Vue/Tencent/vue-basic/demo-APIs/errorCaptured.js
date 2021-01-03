// 不错的介绍：https://www.cnblogs.com/fundebug/p/handling-errors-in-vuejs.html
Vue.component('cat', {
  template:`
<div><h1>Cat: {{name}} </h1>
  <slot></slot>
</div>`,
  props:{
    name:{
      required:true,
      type:String
    }
  },
/*   当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。
  此钩子可以返回 false 以阻止该错误继续向上传播 */
   errorCaptured(err,vm,info) {
    console.log(`cat EC: ${err.toString()}\ninfo: ${info}`); 
     return false;
  }

});

Vue.component('kitten', {
  template:'<div><h1>Kitten: {{ dontexist() }}</h1></div>',
  props:{
    name:{
      required:true,
      type:String
    }
  }
});

const app = new Vue({
  el:'#app'
})