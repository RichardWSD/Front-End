<template>
  <footer>
    <p>{{copyright}}-{{title}}</p>
    <p>{{ loopObj.name }}</p>
    <button @click="emitClick">触发click</button>
  </footer>
</template>

<script>
export default {
  name: "app-fotter",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyright: "Copyright 2017 Vue Demo",
      loopObj: {
        name: '测试更新死循环'
      },
      timer: null
    };
  },
  methods: {
    clickComp(){
      console.log('clickComp')
    },
    emitClick(){
      this.$emit('clickComp')
      this.$emit('click222')
      this.$emit('click')
    }
  },
  //这里可以做组件加载的动画效果
  beforeCreate: function() {
    console.log('组件实例化之前执行的函数');
  },
  //这里可以请求数据；取消组件的动画加载效果
  created: function() {
    console.log('组件实例化完毕，但页面还未显示');
    let i = 0;
    this.timer = setInterval(() => {
      console.log(i++)
    }, 1000);
    // destory清的是这种事件监听，.native和用原生js绑定方式的监听清不了
    this.$on('clickComp', this.clickComp)
  },
  beforeMount:function(){
    console.log('组件挂载前，页面仍未展示，但虚拟Dom已经配置');
    // this.copyright = 'beforeMount' //不会触发更新过程
  },
  mounted:function(){
    console.log('组件挂载后，此方法执行后，页面显示');
    // this.copyright = 'mounted'  //会触发更新过程
  },
  beforeUpdate:function(){
    console.log('组件更新前，页面仍未更新，但虚拟Dom已经配置');
    // this.copyright = 'beforeUpdate'  // 不会触发更新过程
    // this.loopObj = {
    //   name: 'beforeUpdate测试更新死循环'  // 不会触发更新过程
    // }
  },
  updated:function(){
    console.log('组件更新，此方法执行后，页面显示');
    // this.copyright = 'updated'  // 会触发更新过程
    this.loopObj = {
      name: 'updated测试更新死循环'  // 会导致死循环，前提是dom树上有渲染这个数据，因为是比对新旧dom来触发更新过程的
    }
  },
  beforeDestroy :function(){
    console.log('组件销毁前', this.$listeners);
    clearInterval(this.timer)  //可以清理
  },
  destroyed:function(){
    console.log('组件销毁', this.$listeners);
    // clearInterval(this.timer)  //可以清理
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background: #222;
  padding: 6px;
}
footer p {
  color: lightgreen;
  text-align: center;
}
</style>
