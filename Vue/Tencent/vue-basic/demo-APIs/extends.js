// https://blog.csdn.net/xiaodi520520/article/details/88826604

let extendObj = {
  updated: function () { //updated是Vue生命周期
    console.log("我是扩展的updated");
  },
  methods: {
    add() {
      console.log("我是扩展出来的ADD方法"); //和混入一样:当原生有同一个方法时,扩展出来的方法不会执行,只会执行原生的方法                
    }
  },
}
let app = new Vue({
  el: '#app',
  data: {
    num: 1
  },
  methods: {
    add() {
      console.log("我是原生的ADD方法");
      this.num++;
    }
  },
  updated() {
    console.log("我是原生的updated"); // 
  },
  extends: extendObj
})