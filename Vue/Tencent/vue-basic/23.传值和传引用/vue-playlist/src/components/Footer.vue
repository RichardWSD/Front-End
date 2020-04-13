<template>
  <footer>
    <p>{{copyright}}-{{title}}</p>
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
      copyright: "Copyright 2017 Vue Demo"
    };
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
