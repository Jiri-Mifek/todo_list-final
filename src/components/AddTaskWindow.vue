<template>
  <div @mousedown.self="$store.commit('closeWindow')" class="window">
    <div class="theWindow">
      <div class="theWindow__header">
        <h3>New Task</h3>
        <i @click="$store.commit('closeWindow')" class="fas fa-times"></i>
      </div>
      <div class="theWindow__form">
        <div class="theWindow__form__title">
          <label v-show="!canSubmit" for="title"
            >This field is required !!!
          </label>
          <input
            name="title"
            v-model="$store.state.title"
            placeholder="Title"
            type="text"
            required
          />
        </div>

        <input
          v-model="$store.state.notes"
          placeholder="Description"
          type="text"
        />
      </div>
      <button @click="onClick" class="btn">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTaskWindow",
  data() {
    return {
      canSubmit: true,
    };
  },
  methods: {
    onClick() {
      let field = this.$store.state.title;
      this.canSubmit = field != null && field != "";
      if (this.canSubmit) {
        this.$store.commit("createNewTask");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.window {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.45);
  height: 100vh;
  width: 100vw;
  display: flex;
  .theWindow {
    width: 45vw;
    border: 1px solid #dde1e7;
    padding: 30px;
    border-radius: 20px;
    background: #dde1e7;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 500px;
    &__header {
      display: flex;
      justify-content: space-between;
      i {
        margin-top: 6px;
      }
    }
    &__form {
      display: flex;
      flex-direction: column;
      gap: 30px;
      input {
        border: 1px solid rgb(100, 100, 100);
        border-radius: 2px;
        padding: 8px;
        background: #dde1e7;
        font-family: "Poppins", sans-serif;
      }
      &__title {
        display: flex;
        flex-direction: column;
        height: 65px;
        justify-content: flex-end;
        label {
          color: red;
        }
      }
    }
    button {
      text-align: center;
      width: 120px;
      margin-left: auto;
      display: inline-block;
      background: none;
      color: rgb(100, 100, 100);
      border: 2px solid rgb(100, 100, 100);
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 15px;
      font-family: inherit;
    }
  }
}
</style>
