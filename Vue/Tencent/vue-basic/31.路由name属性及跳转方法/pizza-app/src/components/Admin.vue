<template>
    <div>
      <h1>Admin<span>{{id}}</span></h1>
      <router-link :to="{ name: 'adminLink', params: { id: 1 }}">User</router-link>
    </div>
    
</template>
<script>
export default {
  data(){
    return {
      id: 0
    }
  },
  beforeRouteUpdate(to, from, next){
    console.log('----',to, from, next);
    // this.id = this.$route.params.id;
  }
}
</script>