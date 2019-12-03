<template>
  <div class="page-list">
    <h1>{{msg}}</h1>
    <div>
      <el-table
        :data="typeDataList"
        border
        :stripe="true"
        style="width: 100%">
        <el-table-column
          prop="type"
          label="类型"
          width="170">
        </el-table-column>
        <el-table-column
          prop="typeofResut"
          label="typeof">
        </el-table-column>
        <el-table-column
          prop="instanceofResult"
          label="instanceof">
        </el-table-column>
        <el-table-column
          prop="constructorResult"
          label="constructor">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data(){
    return {
      msg: 'JS类型判断',
      dataList: [
        {
          name: 'Number',
          val: 2
        },
        {
          name: 'String',
          val: 'skjfsdk'
        },
        {
          name: 'Boolean',
          val: true
        },
        {
          name: 'Array',
          val: [1,3]
        },
        {
          name: 'Object',
          val: {
            a1: 23
          }
        },
        {
          name: 'Undefined',
          val: undefined
        },
        {
          name: 'Null',
          val: null
        },
        {
          name: 'Function',
          val: function(){  }
        }
      ],
      typeDataList: []
    }
  },
  mounted(){
    this.initData();
  },
  methods: {
    initData(){
      // function Person(){}
      // var Tom = new Person();
      // console.log(Tom.constructor);
      let arr = [];
      this.dataList.map(item => {
        // let name = item.name;
        let val = item.val;
        let instanceofResult;
        let constructorResult;
        if(item.name === 'Undefined' || item.name === 'Null'){
          constructorResult = '-';
        } else {
          constructorResult = (val).constructor;
        }

        if(item.name === 'Number'){
          instanceofResult = `[${item.val} instanceof ${item.name}]:` +  JSON.stringify(val instanceof Number);
        } else if(item.name === 'String'){
          instanceofResult = `[${item.val} instanceof ${item.name}]:` +  JSON.stringify(val instanceof String);
        } else if(item.name === 'Boolean'){
          instanceofResult = `[${item.val} instanceof ${item.name}]:` +  JSON.stringify(val instanceof Boolean);
        } else if(item.name === 'Array'){
          instanceofResult = `[${item.val} instanceof ${item.name}]:` +  JSON.stringify(val instanceof Array);
        } else if(item.name === 'Object' || item.name === 'Undefined' || item.name === 'Null'){
          instanceofResult = `[${item.val} instanceof Object]:` +  JSON.stringify(val instanceof Object);
        }
        arr.push({
          type: item.name,
          typeofResut: `[typeof ${item.val}]:` + typeof item.val,
          instanceofResult: instanceofResult,
          constructorResult: `[(${item.val}).constructor]:` + constructorResult
        });
        return item;
      });
      this.typeDataList = arr;
    }
  }
}
</script>

<style scoped lang="less">

</style>
