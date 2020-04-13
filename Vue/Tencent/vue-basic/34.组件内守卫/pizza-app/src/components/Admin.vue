<template>
  <h1>Admin</h1>
</template>

<script>
export default {
  data() {
    return {
      name: "Henry"
    };
  },

  //组件内的守卫
  //   beforeRouteEnter: (to, from, next) => {
  //     //alert("Hello " + this.name);

  //     next(vm=>{
  //         alert("Hello " + vm.name);
  //         console.log(vm);

  //     })
  //   }

  beforeRouteLeave(to, from, next) {
    if (confirm("确定离开吗?") == true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>