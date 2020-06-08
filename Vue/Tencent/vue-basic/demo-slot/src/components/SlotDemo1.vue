<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FromHelper',
  data(){
    return {
       title:"这个是Slot里面的title"
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
