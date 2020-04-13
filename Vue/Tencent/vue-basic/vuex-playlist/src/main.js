import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

new Vue({
  //使用store
  store:store,
  el: '#app',
  render: h => h(App)
})

//1.安装vuex：npm install vuex --save
//2.添加Vue.js devtools谷歌插件
//3.npm install babel-preset-stage-2 --save-dev
