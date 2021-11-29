<template>
  <div>
    <input
      type="text"
      v-model="newTodo"
      placeholder="请输入待办事项"
      @keyup.enter="addTodo"
    />

    <ul>
      <li
        v-for="todo in filterdTodos"
        :key="todo.id"
        :class="{ completed: todo.completed, editting: todo === edittingTodo }"
      >
        <div class="view">
          <input type="checkbox" v-model="todo.completed" />
          <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
          <button @click="removeTodo(todo)">X</button>
        </div>
        <input
          type="text"
          class="edit"
          v-model="todo.title"
          v-auto-focus="todo === edittingTodo"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.esc="cancelEdit(todo)"
        />
      </li>
    </ul>

    <p class="filter">
      <span
        @click="visibility = 'all'"
        :class="{ selected: visibility === 'all' }"
        >all</span
      ><span
        @click="visibility = 'active'"
        :class="{ selected: visibility === 'active' }"
        >active</span
      ><span
        @click="visibility = 'completed'"
        :class="{ selected: visibility === 'completed' }"
        >completed</span
      >
    </p>
  </div>
</template>

<script>
import { computed, reactive, toRefs, watchEffect } from "vue";

const filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter((todo) => !todo.completed);
  },
  completed(todos) {
    return todos.filter((todo) => todo.completed);
  },
};

const storage = {
  get() {
    return JSON.parse(localStorage.getItem("todomvc"));
  },
  save(todos) {
    localStorage.setItem("todomvc", JSON.stringify(todos));
  },
};

export default {
  directives: {
    autoFocus(el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
  setup() {
    const state = reactive({
      newTodo: "",
      todos: storage.get() || [],
      edittingTodo: null,
      beforeEdit: "",
      visibility: "all",
      filterdTodos: computed(() => filters[state.visibility](state.todos)),
    });

    function addTodo() {
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false,
      });
      state.newTodo = "";
      console.log(state.todos.length);
    }

    function removeTodo(todo) {
      const idx = state.todos.indexOf(todo);
      state.todos.splice(idx, 1);
    }

    function editTodo(todo) {
      // 保存修改前状态
      state.beforeEdit = todo.title;
      state.edittingTodo = todo;
    }
    function doneEdit() {
      state.edittingTodo = null;
    }
    function cancelEdit(todo) {
      todo.title = state.beforeEdit;
      state.edittingTodo = null;
    }

    watchEffect(()=>{
      storage.save(state.todos)
    })

    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
      editTodo,
      doneEdit,
      cancelEdit,
    };
  },
};
</script>

<style scoped>
.completed label {
  text-decoration: line-through;
}

.edit,
.editting .view {
  display: none;
}
.view,
.editting .edit {
  display: block;
}

.selected {
  border: 1px solid #ccc;
}
</style>
