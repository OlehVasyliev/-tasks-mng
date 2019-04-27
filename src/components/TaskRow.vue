<template lang="pug">
  tr.task-row
    td(v-if="!onlyCompleted")
      input(type="checkbox" v-model="task.completed")
    td
      |{{task.title}}
    td
      select(v-model="task.owner")
        option(disabled value="null")
          |Select owner
        option(v-for="user in userList"  :value="user.name")
          |{{user.name}}
  </div>
</template>

<script>

export default {
  name: 'task-row',
  props: {
    task: Object,
    onlyCompleted: false,
  },
  computed: {
    userList() {
      return this.$store.state.userList 
    }
  }
};
</script>

<style scoped lang="scss">
select{
  option[disabled]{
    display: none;
  }
}
</style>
