<template>
  <div>
    <p>Page2</p>
    <p>{{item ? item.time : ''}}</p>
  </div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.params.id)
  },
  /* beforeMount() {
    if (this.$options.asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      this.$options.asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }, */
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
      return this.$store.state.items[this.$route.params.id]
    }
  }
};
</script>