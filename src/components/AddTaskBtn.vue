<template>
  <button @click="$store.commit('openWindow')">Add Task</button>
</template>

<script>
export default {
  name: "AddTaskBtn",
};
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  background: none;
  color: rgb(100, 100, 100);
  border: 2px solid rgb(100, 100, 100);
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  margin-right: 25px;
  position: relative;
  overflow: hidden;
}
button:focus {
  outline: none;
}
button:active {
  transform: scale(0.98);
}
</style>
