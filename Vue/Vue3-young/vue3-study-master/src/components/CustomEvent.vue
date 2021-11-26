<template>
  <div @click="$emit('click')">
    <h3>自定义事件</h3>
  </div>
</template>

<script>
export default {
  emits: ['click']
}
</script>

<style scoped>

</style>