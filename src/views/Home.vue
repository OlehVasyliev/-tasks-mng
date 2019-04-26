<template lang="pug">
  .home
    //- TaskList(:taskList="taskList" :userList="this.userList")
    TaskList
    ReadyTask
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue';
import ReadyTask from '@/components/ReadyTask.vue';
import UserList from '@/components/UserList.vue';


const axios = require('axios');
export default {
  name: 'home',
  components: {
    TaskList,
    ReadyTask,
    UserList
  },
  data() {
    return {
      userList: new Array
    }
  },
  computed: {
    taskList() {
      return this.$store.state.taskList 
    }
  },
  methods: {
  },
  created: function () {
    axios.get('http://f.code-on.be/d/19/04/tasks.json')
        .then(
            response => (
              this.$store.state.taskList = response.data
              
            )

        )
        .catch(function() {
        }.bind(this));
        console.log(this.$store.state.taskList),

    axios.get('http://f.code-on.be/d/19/04/owners.json')
        .then(
            response => (
              this.$store.state.userList = response.data
              
            )

        )
        .catch(function() {
        }.bind(this));
        // this.$store.commit('createTasks', {newTasks: this.taskList});
        // axios.get('http://f.code-on.be/d/19/04/owners.json')
        //     .then(
        //         response => (
        //           console.log(response.data)
                  
        //         )

        //     )
        //     .catch(function() {
        //     }.bind(this))
       
                
  }
};
</script>

<style lang="scss">
    table{
    border: 1px solid #000;
    border-collapse: collapse;
      th{
      background: #42b983;
      padding: 4px 10px;
      border: 1px solid #fff;
      color: #fff;
    }
      td{
      padding: 4px 10px;
      border: 1px solid #fff;
      &.error-bg{
        background: #ff5722;
        color: #fff;
        text-transform: capitalize;
      }
    }
  }
</style>