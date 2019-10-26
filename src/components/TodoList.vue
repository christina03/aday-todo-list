<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <CreateItem></CreateItem>
    <el-table
      :data="tableData"
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
import CreateItem from './CreateItem.vue';

export default {
  name: 'TodoList',
  props: {
    msg: String
  },
  components: {
    CreateItem
  },
  data() {
        return {
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        };
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
