<template lang="pug">
  .task-list
    h4
      |All tasks
    table
      thead
        th
          |Completed
        th
          |Task Title
        th
          |User Assigned
      tbody
        TaskRow(v-for="task in taskList" :key="task.id" :task="task")
</template>

<script>

import TaskRow from '@/components/TaskRow.vue';

export default {
  name: 'TaskList',
  props: {
    userList: Array
  },
  components: {
    TaskRow,
  },
  data() {
    return {
    }
  },
  computed: {
    taskList() {
      return this.$store.state.taskList 
    }
  },
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
