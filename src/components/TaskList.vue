<template lang="pug">
  .task-list(v-if="taskListRender(this.taskList).length ")
    h4
      |{{titleRender()}}
    table
      thead
        th(v-if="!this.onlyCompleted")
          |Completed
        th
          |Task Title
        th
          |User Assigned
      tbody
        TaskRow(v-for="task in taskListRender(this.taskList)" :key="task.id" :task="task" :onlyCompleted="onlyCompleted")
</template>

<script>

import TaskRow from '@/components/TaskRow.vue';

export default {
  name: 'TaskList',
  components: {
    TaskRow,
  },
  props: {
    onlyCompleted: false,
    userList: {},
    taskList: {}
  },
  data() {
    return {
      title: "tasks"
    }
  },
  methods: {
    taskListRender: function (taskList) {
      if(this.onlyCompleted)
        return taskList.filter( task => task.completed);
      return taskList;
    },
    titleRender: function () {
      if(this.onlyCompleted)
        return "Completed " + this.title;
      return "All " + this.title;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
