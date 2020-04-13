import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// 自定义的模板信息在C:\Users\Dell\.vuerc文件中
