<template>
  <div>
    <h1>Home</h1>
    <ul>
        <li><router-link to="/calculator">计算器</router-link></li>
        <li><router-link to="/todo-list">Todo List</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {},
};
</script>
