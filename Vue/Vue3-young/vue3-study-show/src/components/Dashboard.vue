<template>
  <Todos></Todos>
  <ul>
    <li>
      <!-- <router-link to="/">dashboard</router-link> -->
      <NavLink to="/"></NavLink>
    </li>
    <li>
      <!-- <router-link to="/about">about</router-link> -->
      <NavLink to="/about"></NavLink>
    </li>
    <li>
      <!-- <router-link to="/todos">todos</router-link> -->
      <NavLink to="/todos"></NavLink>
    </li>
  </ul>
</template>

<script>
import NavLink from "./NavLink.vue";
import Todos from './Todos.vue'

export default {
  components: {
    NavLink,
    Todos
  },
};
</script>

<style scoped></style>
