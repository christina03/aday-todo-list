<template>
  <div class="page-list">
    <h1>{{msg}}</h1>
    <div class="list-container">
        <div
            v-for="(item, index) in pageData.content"
            :key="index"
            class="item"
        >
            <h4>{{item.modelName}}</h4>
            <div class="desc">{{item.modelDesc}}</div>
            <div
                v-for="(unit,index) in item.modelDetail"
                :key="index"
                class="icon"
            >
                <div class="circle"></div><div class="line"></div><div class="content">{{unit}}</div>
            </div>
            <el-divider></el-divider>
        </div>
    </div>
    <div>
      <div class="main-list-col">
          <div class="list-pages listpage-latest">
              <a href="javascript:" class="pre-page">上一页</a>
              <div class="pagesin"><a href="javascript:" rel="1" class="active-pages">1</a><a href="javascript:" rel="2">2</a><a href="javascript:" rel="3">3</a><a href="javascript:" rel="4">4</a><a href="javascript:" rel="5">5</a><a href="javascript:" rel="6">6</a><a href="javascript:" rel="7">7</a><a href="javascript:" rel="8">8</a><a href="javascript:" rel="9">9</a><a href="javascript:" rel="10">10</a><a href="javascript:" rel="11">11</a><a href="javascript:" rel="12">12</a><a href="javascript:" rel="13">13</a><a href="javascript:" rel="14">14</a><a href="javascript:" rel="15">15</a><a href="javascript:" rel="16">16</a><a href="javascript:" rel="17">17</a><a href="javascript:" rel="18">18</a><a href="javascript:" rel="19">19</a><a href="javascript:" rel="20">20</a><a href="javascript:" rel="21">21</a><a href="javascript:" rel="22">22</a><a href="javascript:" rel="23">23</a></div>
              <a href="javascript:" class="next-page">下一页</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import pageListData from '../data/PageListData.ts';
export default {
  components: {
    
  },
  data(){
    return {
      msg: 'JS实现分页',
      pageData: {
        pageNumber: 1,
        pageSize: 10,
        totalElements: 355,
        content: [{
          modelName: '段落1',
          modelDesc: '在乡下婆婆家中过周末，半夜被梦惊醒，于是披衣出了卧室，一则理理心绪，二则也享受一下这宁静祥和的乡村夜晚。',
          modelDetail: ['珍藏在时光深处的老照片。', '指如削葱根，口如含朱丹。', '纤纤作细步，精妙世无双。'],
          id: 12
        }, {
          modelName: '段落2',
          modelDesc: '我伸手推开窗，以便让外面干净的风吹进来——夜非常的寂静！风很小，但刺骨的凉，风中似有细小的冰屑——那是雪，尖细如针。',
          modelDetail: ['十三能织素。', '十四学裁衣。', '十五弹箜篌，十六诵诗书。'],
          id: 13
        }, {
          modelName: '段落3',
          modelDesc: '砍价=抽奖（自己砍下去的金额）+补贴（优惠券）+目标达成（最多可砍人数）。',
          modelDetail: ['君既若见录，不久望君来。', '君当作磐石，妾当作蒲苇。', '蒲苇纫如丝，磐石无转移。'],
          id: 14
        }, {
          modelName: '段落4',
          modelDesc: '脑海里忽然出现南宋蒋捷的几句词“梦也梦也，梦不到，寒水空流。',
          modelDetail: ['漠漠黄云，湿透木棉裘。', '都道无人愁似我，今夜雪，有梅花，似我愁”。', '可惜，这里没有梅花，唯有那个斜挂的似眉弯月，清冷地看着我！'],
          id: 15
        },{
          modelName: '段落5',
          modelDesc: '在乡下婆婆家中过周末，半夜被梦惊醒，于是披衣出了卧室，一则理理心绪，二则也享受一下这宁静祥和的乡村夜晚。',
          modelDetail: ['珍藏在时光深处的老照片。', '指如削葱根，口如含朱丹。', '纤纤作细步，精妙世无双。'],
          id: 16
        }, {
          modelName: '段落6',
          modelDesc: '我伸手推开窗，以便让外面干净的风吹进来——夜非常的寂静！风很小，但刺骨的凉，风中似有细小的冰屑——那是雪，尖细如针。',
          modelDetail: ['十三能织素。', '十四学裁衣。', '十五弹箜篌，十六诵诗书。'],
          id: 17
        }, {
          modelName: '段落7',
          modelDesc: '砍价=抽奖（自己砍下去的金额）+补贴（优惠券）+目标达成（最多可砍人数）。',
          modelDetail: ['君既若见录，不久望君来。', '君当作磐石，妾当作蒲苇。', '蒲苇纫如丝，磐石无转移。'],
          id: 18
        }, {
          modelName: '段落8',
          modelDesc: '脑海里忽然出现南宋蒋捷的几句词“梦也梦也，梦不到，寒水空流。',
          modelDetail: ['漠漠黄云，湿透木棉裘。', '都道无人愁似我，今夜雪，有梅花，似我愁”。', '可惜，这里没有梅花，唯有那个斜挂的似眉弯月，清冷地看着我！'],
          id: 19
        }]
      }
    }
  },
  mounted(){
    // console.log(pageListData);
    // this.pageDta = pageListData;
  },
  methods: {
    
  }
}
</script>

<style scoped>
.page-list {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1000px;
  margin: 0 auto;
}
/*页码*/
.main-list-col{ 
  text-align: center;
  padding:  16px 0;
  font-size: 16px;
  color: #3B445C;
  font-family:PingFangSC-Regular,PingFang SC;
}
/* div{
  display: inline-block;
} */
.pages{
  cursor: pointer;
}
.pagesin{
  margin:  0 19px;
  width: 355px;
  white-space: nowrap;
  overflow:hidden;
  position: relative;
  top: 6px;
  display: inline-block;
  
}
a{
  display: inline-block;
  line-height:22px;
  color: #3B445C;
  min-width: 35px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}
.active-pages{
  background: #F33F3E;
  color: #fff;
}

/**列表 */
.list-container {
  padding: 10px;
  background: #fff;

}

.content {
  font-weight: 400;
  color: #666666;
  font-size: 14px;
}

.desc {
  font-size: 14px;
  margin-bottom: 10px;
}

.circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
}

.line {
  margin: 0 2px;
  display: inline-block;
  width: 15px;
  height: 2px;
  background: #ccc;
}

.icon {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.btn {
    margin-top: 15px;
}
</style>
