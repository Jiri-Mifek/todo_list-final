import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        text: "This is example task!!!",
        description: "here you can add description for task",
        completion: false,
        uploaded: false,
        showDescription: false,
      },
    ],
    AddOpened: false,
    title: null,
    notes: null,
    currentId: null,
  },
  getters: {},
  mutations: {
    openWindow(state) {
      state.AddOpened = true;
      state.title = null;
      state.notes = null;
    },
    closeWindow(state) {
      state.AddOpened = false;
    },
    deleteTask(state, { id }) {
      state.currentId = id;
      state.tasks = state.tasks.filter((task) => task.id !== state.currentId);
    },
    completeTask(state, { id }) {
      let complete = state.tasks.find((x) => x.id === id).completion;
      complete = !complete;
      state.tasks.find((x) => x.id === id).completion = complete;
    },
    showTxt(state, { id }) {
      let desc = state.tasks.find((x) => x.id === id).showDescription;
      desc = !desc;
      state.tasks.find((x) => x.id === id).showDescription = desc;
    },
    createNewTask(state) {
      let taskId = state.tasks.length;
      state.tasks.push({
        id: taskId + 1,
        text: state.title,
        description: state.notes,
        completion: false,
        uploaded: false,
        showDescription: false,
      });
      state.AddOpened = false;
    },
    uploadAllTasks(state) {
      state.tasks.forEach((element) => {
        element.uploaded = true;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    showTasks(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks"));
      if (state.tasks == null) {
        state.tasks = [];
      }
    },
    uploadTask(state, { id }) {
      state.tasks.find((x) => x.id === id).uploaded = true;
      let tasksForUpload = [];
      tasksForUpload.push(state.tasks.find((task) => task.uploaded == true));
      localStorage.setItem("tasks", JSON.stringify(tasksForUpload));
      console.log(tasksForUpload);
    },
  },
  actions: {},
  modules: {},
});
