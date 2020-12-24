Vue.config.keyCodes = {
  // camelCase 不可用
  // mediaPlayPause: 96, //0
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 96 //0
}

new Vue({
  el: '#app',
  methods: {
    handle() {
      console.log(11);
    }
  }
})