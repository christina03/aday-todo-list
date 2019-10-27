<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <CreateItem></CreateItem>
    <TodoList msg="One Day Todo List" :todoList="todoList"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import CreateItem from './components/CreateItem.vue';
import TodoListData from './data/TodoListData.js';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateItem
  },
  data(){
    return {
      msg: 'One Day Todo List',
      todoList: TodoListData
    }
  },
  mounted(){
    
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
