// app.js
import Vue from 'vue'
// Sync vue-router's current $route as part of vuex store's state.
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import createRouter from './router'
import createStore from './vuex'

//研究例子： https://segmentfault.com/a/1190000020416213

export default function createApp () {
  // 创建 router 实例
  const router = createRouter()
  const store = createStore()

  // 同步路由状态(route state)到 store
  sync(store, router)

  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    store,
    render: (h) => h(App)
  })

  // 返回 app 和 router
  return { app, router, store }
}
