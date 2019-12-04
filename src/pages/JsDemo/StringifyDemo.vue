<template>
  <div class="page-list">
    <h1>{{msg}}</h1>
    <div>自定义方法实现：{{stringObj}}</div>
    <div>JSON.stringify()方法实现：{{originalStr}}</div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data(){
    return {
      msg: 'JSON.stringify()demo',
      stringObj: '',
      originalStr: '',
      test :{
        a: '123',
        name: 'test',
        desc: [1,2,"bb"],
        param: {
          a1: 234,
          b2: 'ceshi',
          c3: true
        }
      }
    }
  },
  mounted(){
    // let test = {
    //   a: '123',
    //   name: 'test',
    //   desc: [1,2,"bb"],
    //   param: {
    //     a1: 234,
    //     b2: 'ceshi',
    //     c3: true
    //   }
    // };
    let test = true;
    this.stringObj = this.mySelfStringify(test);
    this.originalStr = JSON.stringify(test);
  },
  methods: {
    mySelfStringify(data){
      let dataStr = '';
      if(data){
        if(data instanceof Object){ 
          dataStr += this.objStr(data);
        } else if(data instanceof Array){
          dataStr += this.arrayStr(data);
        } else {
          dataStr += `${data}`;
        }
      }
      return dataStr;
    },
    objStr(obj){
      let objStr = '';
      for(let key in obj){
        let str = '';
        if (typeof obj[key] === 'number' || typeof obj[key] === 'boolean'){
          str = `"${key}":${obj[key]}`;
        } else if (typeof obj[key] === 'string'){
          str = `"${key}":"${obj[key]}"`;
        } else if(obj[key] instanceof Array){
          str = `"${key}":`+this.arrayStr(obj[key]);
        } else if(obj[key] instanceof Object){
          str =  `"${key}":`+this.objStr(obj[key]);
        }
        objStr += objStr ? `,${str}` : `${str}`;
      }
      return `{${objStr}}`;
    },
    arrayStr(arr){
      let arrStr = '';
      // typeof 值为object时，有null,array,object三种可能
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' || typeof arr[i] === 'boolean'){
          arrStr += i+1 !== arr.length ? `${arr[i]},` : `${arr[i]}`;
        } else if (typeof arr[i] === 'string'){
          arrStr += i+1 !== arr.length ? `"${arr[i]}",` : `"${arr[i]}"`;
        } else if(arr[i] instanceof Object){ 
          arrStr += this.objStr(arr[i]);
        } else if(arr[i] instanceof Array){
          arrStr += this.arrayStr(arr[i]);
        }
      }
      return `[${arrStr}]`;
    }
  }
}
</script>

<style scoped lang="less">

</style>
