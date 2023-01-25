<template>
  <div
    :class="{ completion: task.completion, uploaded: task.uploaded }"
    class="taskBox"
    @click.self="showText(task.id)"
  >
    <div class="taskBox__visible" @click.self="showText(task.id)">
      <div class="taskBox__visible__title" @click.self="showText(task.id)">
        <h3 @click.self="showText(task.id)">{{ task.text }}</h3>
      </div>
      <div class="taskBox__visible__buttons" @click.self="showText(task.id)">
        <i
          @click="taskSave(task.id)"
          v-if="!task.uploaded"
          class="fas fa-cloud-arrow-up"
        ></i>
        <i @click="taskComplete(task.id)" class="fas fa-check"></i>
        <i @click="taskDelete(task.id)" class="fas fa-times"></i>
      </div>
    </div>
    <div
      class="taskBox__extend"
      v-if="task.showDescription"
      @click.self="showText(task.id)"
    >
      {{ task.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    taskDelete(id) {
      this.$store.commit("deleteTask", { id });
    },
    taskComplete(id) {
      this.$store.commit("completeTask", { id });
    },
    showText(id) {
      this.$store.commit("showTxt", { id });
    },
    taskSave(id) {
      this.$store.commit("uploadTask", { id });
    },
  },
};
</script>

<style lang="scss" scoped>
.taskBox {
  border: 2px solid #dde1e7;
  margin: 0px 25px;
  margin-bottom: 25px;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
  background: #dde1e7;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  &__visible {
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    &__title {
      margin-left: 20px;
    }
    &__buttons {
      margin-right: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
  }
  &__extend {
    border-radius: 20px;
    margin: 0px 20px 20px 20px;
  }
}
.taskBox.completion {
  h3 {
    text-decoration: line-through;
  }
}
i:active {
  transform: scale(0.9);
}
.taskBox.uploaded {
  color: blue;
}
</style>
