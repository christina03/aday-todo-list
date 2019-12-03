<template>
  <div class="page-list">
    <h1>{{msg}}</h1>
    <div>
      <input v-model="inputMsg">
      <input :value="inputMsg" @input="inputMsg = $event.target.value">
    </div>
    <div>当前输入值：{{inputMsg}}</div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data(){
    return {
      msg: 'v-model实现原理',
      inputMsg: ''
    }
  },
  mounted(){
    
  },
  methods: {
    
  }
}
</script>

<style scoped lang="less">

</style>
