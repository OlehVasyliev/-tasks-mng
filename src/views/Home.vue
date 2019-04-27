<template lang="pug">
  .home
    .home__content
      TaskList(:taskList="this.taskList")
      TaskList(:taskList="this.taskList" onlyCompleted="true")
    .home__content
      UserList(:userList="this.userList" :taskList="this.taskList")
</template>

<script>
import TaskList from '@/components/TaskList.vue';
import UserList from '@/components/UserList.vue';
import { log } from 'util';


const axios = require('axios');
export default {
  name: 'home',
  components: {
    TaskList,
    UserList
  },
  computed: {
    taskList() {
      return this.$store.state.taskList 
    },
    userList() {
      return this.$store.state.userList 
    }
  }
};
</script>

<style lang="scss">
  .home{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    &__content{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  table{
  border: 1px solid #000;
  border-collapse: collapse;
  transition: 1s;
    thead,
    tbody,
    th,
    td{
      padding: 4px 10px;
      transition: 1s;
      transition: 0.5s;
      width: 100%;
      &:first-child{
        width: 0;
        white-space: nowrap;
      }
    }
    th{
      background: #42b983;
      border: 1px solid #fff;
      color: #fff;
    }
    td{
      border: 1px solid #fff;
      &.error-bg{
        background: #ff5722;
        color: #fff;
        text-transform: capitalize;
      }
    }
  }
</style>