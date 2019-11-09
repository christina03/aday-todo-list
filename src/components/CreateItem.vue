<template>
    <el-form ref="form" :model="form" label-width="100px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="时间段">
            <el-col>
              <el-time-picker is-range v-model="form.startAndEndTime" range-separator="至" start-placeholder="开始时间"
              end-placeholder="结束时间" style="width: 100%;" format="HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"></el-time-picker>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="待办项名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="详细描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import { storage } from '../data/Storage.ts';
export default {
  name: 'TodoList',
  props: {
    msg: String
  },
  data() {
      return {
          form: {
              name: '',
              startAndEndTime: '',
              desc: ''
          }
      }
    },
    mounted() {
        
    },
    methods: {
        onCancel(){
          this.form = {
            name: '',
            startTime: '',
            endTime: '',
            desc: ''
          }
        },
        // 创建待办项
        onSubmit() {
            let listDataArr = JSON.parse(localStorage.getItem(storage.LOCAL_LIST_DATA)) || [];
            let obj = {
              timeRange: this.form.startAndEndTime.join('至'),
              name: this.form.name,
              desc: this.form.desc
            }
            listDataArr.push(obj);
            localStorage.setItem(storage.LOCAL_LIST_DATA, JSON.stringify(listDataArr));
            this.$emit('createBtn');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  
}
</style>
