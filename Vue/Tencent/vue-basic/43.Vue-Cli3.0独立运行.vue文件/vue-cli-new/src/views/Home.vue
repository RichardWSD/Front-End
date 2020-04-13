<template>
  <div>
    <p>{{url}}</p>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      url: process.env.VUE_APP_URL
    };
  }
};
</script>
