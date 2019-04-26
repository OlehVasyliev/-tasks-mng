<template lang="pug">
  transition( name="fade")
    .hello(v-if="taskList.length")
      h4
        |Ready tasks
      table
        thead
          th
            |Task Title
          th
            |User Assigned
        transition-group( name="slide-left" tag="tbody")
          tr(v-for="task in taskList" :key="task.id")
            td
              |{{task.title}}
            td(:class="{'error-bg': !task.owner}")
              |{{task.owner | ownerAssigned}}
  </div>
</template>

<script>

export default {
  name: 'ReadyTask',
  props: {
    userList: Array
  },
  data() {
    return {
    }
  },
  filters: {
    ownerAssigned(value) {
      return value || "owner is not defend";
    }
  },
  computed: {
    taskList() {
      return this.$store.state.taskList.filter( task => task.completed)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
select{
  option[disabled]{
    display: none;
  }
}
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
