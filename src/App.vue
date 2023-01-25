<template>
  <div class="app">
    <div class="app__Header">
      <h1>Task list</h1>
      <i
        @click="$store.commit('uploadAllTasks')"
        class="fas fa-cloud-arrow-up"
      ></i>
      <AddTaskBtn />
    </div>
    <div class="app__Tasks">
      <TasksList />
    </div>
    <AddTaskWindow v-if="$store.state.AddOpened" />
  </div>
</template>

<script>
import AddTaskBtn from "./components/AddTaskBtn";
import TasksList from "./components/TasksList";
import AddTaskWindow from "./components/AddTaskWindow";

export default {
  name: "App",
  components: {
    AddTaskBtn,
    TasksList,
    AddTaskWindow,
  },
  mounted() {
    this.$store.commit("showTasks");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  background: #dde1e7;
}
body {
  font-family: "Poppins", sans-serif;
  color: rgb(100, 100, 100);
}
.app {
  margin: auto;
  min-height: 400px;
  width: 25vw;
  min-width: 500px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 25px;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
  background: #dde1e7;
  border-radius: 20px;
  &__Header {
    height: 100px;
    width: 99%;
    border-radius: 20px;
    border: 2px solid #dde1e7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin-top: 20px;
      margin-left: 20px;
    }
    i {
      margin-left: 170px;
    }
  }
}
</style>
