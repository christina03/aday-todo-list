<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <CreateItem @createBtn="createBtn"></CreateItem>
    <TodoList msg="One Day Todo List" :todoList="todoList"/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import CreateItem from '../components/CreateItem.vue';
import { storage } from '../data/Storage.ts';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateItem
  },
  data(){
    return {
      msg: 'One Day Todo List',
      todoList: JSON.parse(localStorage.getItem(storage.LOCAL_LIST_DATA)) || []
    }
  },
  mounted(){
    
  },
  methods: {
    createBtn(){
      this.todoList = JSON.parse(localStorage.getItem(storage.LOCAL_LIST_DATA));
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
