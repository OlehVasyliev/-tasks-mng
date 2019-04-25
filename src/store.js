import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskList: new Array,
  },
  mutations: {
    createTasks (state, newTasks) {
      state.taskList = newTasks
    },
    addTask (state, newTask) {
      state.taskList.push(newTask)
    },

  },
  actions: {

  },
});
