<template>
    <div>
      <h1 id="title" v-if="show" v-stat>Home</h1>
      <button @click="add">切换</button>
    </div>
</template>

<script>
export default {
  data(){
    return {
      show: false
    }
  },
  created(){
  },
  methods: {
    add(){
      this.show = !this.show;
    }
  }
}
</script>