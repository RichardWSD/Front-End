<template>
  <div class="users">
    <h1>Hello Users</h1>
    <div>{{ isB }}</div>
    <div>
      <span>{{ strChild }}</span>
      <!-- <button @click="strChild = '改变了'">改变文本值</button> -->
    </div>
    <ul>
      <li
        v-for="(user, index) in users"
        :key="index"
        v-on:click="user.show = !user.show"
      >
        <h2>{{ user.name }}</h2>
        <h3 v-show="user.show">{{ user.position }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "users",
  //props:['users'],
  // 更好写法：
  props: {
    users: {
      type: Array,
      required: true
    },
    isB: Boolean,
    strChild: String
  },
  data() {
    return {};
  },
  mounted() {
    console.log("子组件挂载");
  },
  updated() {
    console.log("子组件更新");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
