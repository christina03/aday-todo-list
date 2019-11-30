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
      <div class="pages">
          <div class="list-pages">
              <a class="pre-page" @click="prevPage">上一页</a>
              <div class="pagesin">
                <a v-for="item in currentPageList" :class="{ 'active-pages' : item === currentPage }" :key="item" @click="onPage(item)">{{ item }}</a>
              </div>
              <a class="next-page" @click="nextPage">下一页</a>
              <a class="page-item">第{{currentPage}}页</a>
              <a class="page-item">总共{{totalPage}}页</a>
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
      },
      currentPage: 1, // 当前显示页码
      totalPage: 0, // 总页码
      currentPageList: [], // 当前显示的数组
    }
  },
  mounted(){
    this.totalPage = Math.ceil(this.pageData.totalElements/this.pageData.pageSize);
    this.initPageList();
  },
  methods: {
    prevPage(){
      if(this.currentPage>1){
        this.currentPage--;
        this.initPageList();
      }
    },
    nextPage(){
      if(this.currentPage < this.totalPage){
        this.currentPage++;
        this.initPageList();
      }
    },
    initPageList(){
        let pageSize = this.pageData.pageSize; // 页码分组
        let totalPage = this.totalPage;
        let result = [];
        let totalArr = []; 
        for(var i = 1; i <= totalPage; i++){ // 将所有页码放在一个数组里
            totalArr.push(i);
        }
        for (var n = 0, j = totalPage; n <= j; n += pageSize) { // 将页码分组
            result.push(totalArr.slice(n, n + pageSize));
        }
        result.map(list => {
            list.map(item => {
                if(item === this.currentPage){ // 判断当前页面是在哪个数组里，然后渲染当前组的页面
                    this.currentPageList = list;
                }
                return item;
            });
            return list;
        });
    },
    onPage(page){
      this.currentPage = page;
    }
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
.pages{ 
  text-align: center;
  padding:  16px 0;
  font-size: 16px;
  color: #3B445C;
  font-family:PingFangSC-Regular,PingFang SC;
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

.page-item{
  margin-left: 20px;
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
