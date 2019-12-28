<template>
  <div class="page-list">
    <h1>{{msg}}</h1>
    <h3>方法一：采用正则表达式</h3>
    <div class="page-list-box">
        <span class="page-list-box__label">输入数字：</span>
        <el-input-number v-model="num1"  controls-position="right" :min="0" :step="1" :precision="0" :controls="false"></el-input-number>
        <span class="page-list-box__result">{{spNum1}} 元</span>
    </div>
    <div class="page-list-box">
        <span class="page-list-box__label">输入小数字：</span>
        <el-input-number v-model="num2"  controls-position="right" :min="0" :step="1" :precision="3" :controls="false"></el-input-number>
        <span class="page-list-box__result">{{spNum2}} 元</span>
    </div>
    <h3>方法二：toLocaleString()</h3>
    <div class="page-list-box">
        <span class="page-list-box__label">输入数字：</span>
        <el-input-number v-model="num3"  controls-position="right" :min="0" :step="1" :precision="5" :controls="false"></el-input-number>
        <span class="page-list-box__result">{{spNum3}} 元</span>
    </div>
    <div class="page-list-box">
        <span class="page-list-box__label">输入小数字：</span>
        <el-input-number v-model="num4"  controls-position="right" :min="0" :step="1" :precision="1" :controls="false"></el-input-number>
        <span class="page-list-box__result">{{spNum4}} 元</span>
    </div>
    <h3>方法三：原始方法</h3>
    <div class="page-list-box">
        <span class="page-list-box__label">输入数字：</span>
        <el-input-number v-model="num5"  controls-position="right" :min="0" :step="1" :precision="0" :controls="false"></el-input-number>
        <span class="page-list-box__result">{{spNum5}} 元</span>
    </div>
    <div class="page-list-box">
        <span class="page-list-box__label">输入小数字：</span>
        <el-input-number v-model="num6"  controls-position="right" :min="0" :step="1" :precision="3" :controls="false"></el-input-number>
        <span class="page-list-box__result">{{spNum6}} 元</span>
    </div>
    <div>{{times}}</div>
  </div>
</template>

<script>
import times from '@/lib/utils/performance.js';
export default {
  components: {
    
  },
  data(){
    return {
      msg: '千分位分隔符',
      num1: 1234567,
      num2: 57684.3445,
      num3: 33456000.909912,
      num4: 10000000.2,
      num5: 1000000000,
      num6: 100000000.500,
      spNum1: '',
      spNum2: '',
      spNum3: '',
      spNum4: '',
      spNum5: '',
      spNum6: '',
      times: times
    }
  },
  mounted(){
    this.spNum1 = this.separatorRegNumber(this.num1);
    this.spNum2 = this.separatorRegNumber(this.num2);
    this.spNum3 = this.separatorNumber(this.num3);
    this.spNum4 = this.separatorNumber(this.num4);
    this.spNum5 = this.separatorOriginalNumber(this.num5);
    this.spNum6 = this.separatorOriginalNumber(this.num6);
  },
  watch:{
      num1(){
          this.spNum1 = this.separatorRegNumber(this.num1);
      },
      num2(){
          this.spNum2 = this.separatorRegNumber(this.num2);
      },
      num3(){
          this.spNum3 = this.separatorNumber(this.num3);
      },
      num4(){
          this.spNum4 = this.separatorNumber(this.num4);
      },
      num5(){
          this.spNum5 = this.separatorOriginalNumber(this.num5);
      },
      num6(){
          this.spNum6 = this.separatorOriginalNumber(this.num6);
      },
  },
  methods: {
    separatorRegNumber(number){
        let result = number.toString().replace(/\d+/, function(n){ // 先提取整数部分
            return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
                return $1+",";
            });
        });
        return result;
    },
    separatorNumber(number){
        return number.toLocaleString();
    },
    separatorOriginalNumber(number){
        let num = number.toString().split('.'); // 分割小数点
        let numArr = num[0].split('').reverse();
        let result = [];
        let res = '';
        numArr.map((item,i) => {
            if(i%3 === 0 && i !== 0){
                result.push(',');
            }
            result.push(item);
            return item;
        });
        result.reverse();
        if(num.length>1 && num[1]){
            res = result.join('') + '.' + num[1];
        } else {
            res = result.join('');
        }
        return res;
    }
  }
}
</script>

<style scoped lang="less">
.page-list{
    &-box{
        margin: 10px;
        &__label{
            width: 180px;
            display: inline-block;
        }
        &__result{
            margin-left: 10px;
        }
    }
}
</style>
