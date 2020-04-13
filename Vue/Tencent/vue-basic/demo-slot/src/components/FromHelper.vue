<template>
  <div>
    <slot name="title"></slot>
    <h1>登登登</h1>
    <slot name="text"></slot>


    <!-- 占位作用,接受父组件传过来的子标签 -->
    <!-- <slot></slot> -->
  </div>
</template>

<script>
export default {
  name: 'FromHelper',
  data(){
    return {
      //属性只能写在传入值的地方,不能在接收值这里写
      // title:"这个是title"
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 样式可以在这里写也可以在App.vue(传入标签的地方)那里写 */
/* h2{
  background: lightgreen;
} */
</style>
