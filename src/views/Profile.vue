<template lang="pug">
  .profile
    .profile__content
    h1
      |This is an profile page
    h4
      |Why are you?
      |&nbsp;
      select(v-model="activeUser")
        option(disabled value="null")
          |Select owner
        option(v-for="user in userList"  :value="user.name")
          |{{user.name}}
    TaskList(:taskList="this.taskList")
</template>

<script>

import TaskList from '@/components/TaskList.vue';
export default {
  name: 'profile',
  components: {
    TaskList,
  },
  filters: {
    ownerAssigned(value) {
      return value || "owner is not defend";
    }
  },
  computed: {
    taskList() {
      return this.$store.state.taskList.filter( task => task.owner == this.activeUser && task.owner != null)
    },
    userList() {
      return this.$store.state.userList
    }
  }
};
</script>
<style lang="scss">

  .profile{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>