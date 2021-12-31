<template>
  <div>
    <slot></slot>
    <div abc efg>css属性前后测试</div>
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
span {
  color: blue;
}
div[abc] {
  color: aqua;
}
div[efg] {
  color: salmon;
}
</style>
