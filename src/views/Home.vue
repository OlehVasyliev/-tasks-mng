<template lang="pug">
  .home
    TaskList(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue';
import UserList from '@/components/UserList.vue';


const axios = require('axios');
export default {
  name: 'home',
  components: {
    TaskList,
    UserList
  },
  data() {
    return {
      taskList: new Array
    }
  },
  methods: {
  },
  created: function () {
    axios.get('http://f.code-on.be/d/19/04/tasks.json')
        .then(
            response => (
              console.log(response.data),
              this.taskList = response.data
              
            )

        )
        .catch(function() {
        }.bind(this));
        this.$store.commit('createTasks', {newTasks: this.taskList})
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
