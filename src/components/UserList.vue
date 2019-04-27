<template lang="pug">
  .user-list
    h4
      |All Users
    table
      thead
        th
          |Owner name
        th
          |Owner Tasks
        th
          |Tasks Complited
      tbody
        tr(v-for="user in userList" :key="user.id")
          td
            |{{user.name}}
          td
            |{{userTasks(user.name)}}
          td
            |{{userTasksComplited(user.name)}}
  </div>
</template>

<script>
import { log } from 'util';
export default {
  name: 'user-list',
  props: {
    userList: {},
    taskList: {}
  },
  methods: {
    userTasks: function (user) {
      if(!this.taskList.length)
        return "0"
      else
        return this.taskList.filter( task => task.owner == user).length
    },
    userTasksComplited: function (user) {
      if(!this.taskList.length)
        return "0"
      else
        return this.taskList.filter( task => task.completed && task.owner == user).length
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
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
