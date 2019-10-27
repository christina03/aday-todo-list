<template>
  <div class="container">
    <el-table
      :data="todoList"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="待办项名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="详细描述">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>


export default {
  name: 'TodoList',
  props: {
    msg: String,
    todoList: {
      type: Array,
      defult: []
    }
  },
  data() {
        return {
        }
    },
    mounted() {
        
    },
    methods: {
        // 创建项目
        createProject() {
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{

}
</style>
