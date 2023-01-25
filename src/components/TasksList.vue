<template>
  <div>
    <div :key="task.id" v-for="task in $store.state.tasks">
      <Task :task="task" />
    </div>
  </div>
</template>

<script>
import Task from "./Task";

export default {
  name: "TasksList",
  components: {
    Task,
  },
  props: {
    tasks: Array,
  },
};
</script>

<style lang="scss" scoped></style>
