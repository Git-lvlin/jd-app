<template>
    <div class="jd-find">
      <!-- 导航栏搜索框 -->
      <jdNvaBar>
        <template>
          <van-search
            :v-model="value"
            shape="round"
            background="#ffffff"
            placeholder="请输入搜索关键词"
          />
        </template>
      </jdNvaBar>
      <!-- end -->
      <div class="left">
         <van-sidebar v-model="activeKey">
          <van-sidebar-item
          v-for="item in menulist"
          :key="item._id"
           :title="item.cate_zh" 
           />
        </van-sidebar>
      </div>
      <div class="right">
        <!-- 当没有商品时显示的内容 -->
         <empty :show="inNull">
           <!-- 自定义属性show,由inNull真假来判断显示隐藏 -->
           <!-- 缓存内容数组长度为零时显示 -->
         </empty>
          <!-- 商品列表 -->
        <van-grid :column-num="3" icon-size='1.4rem' :border='false'>
          <van-grid-item 
          v-for="item in cache[activeKey]"
           :key="item._id" 
           @click="back(item._id)"
          :icon="$img.baseImg+item.img"
           :text="item.name" />
        </van-grid>
        <!-- end -->
      </div>
       
        <jdTabbar /> 
    </div>
</template>

<script>
//导入缓存需要的 辅助函数帮助我们生成计算属性
import { mapState, mapActions , mapMutations} from 'vuex'
//导入拥有全局的底部导航组件
import { jdTabbar,jdNvaBar,empty} from '@/components'
export default {
  name:'Find',
  components: {
    jdTabbar,
    jdNvaBar,
    empty
  },
  data(){
    return {
      activeKey:0,
      value:'',
      menulist:[]
    }
  },
  computed:{
    ...mapState('good',['cache']),//从模块导入用于缓存和渲染的对象,可以直接使用
      payload(){//右边接口所需要的入参
      return {
        key:this.activeKey,
        cate:this.menulist[this.activeKey].cate
      }
    },
    inNull(){//缓存内容数组长度为零且存在时显示
      var arr=this.cache[this.activeKey]
      return arr && arr.length===0
    }
  },
  methods:{
    back(id){//根据所点的id跳转到指定商品的详情页
      this.$router.push('./detail/'+id)
    },
    ...mapActions('good',['getsubmenu']),//与后端api进行交互的方法
    ...mapMutations('good',['clearcache'])//清缓存
  },
  async mounted(){//使两个异步接口按同步执行
      //商品品类不用入参
      await this.$api.findmenu().then(res=>{//列表菜单的接口
         this.menulist=res
          this.getsubmenu(this.payload)//传给actions
       })
  },
  watch:{
    activeKey(){
      //性能优化
      if(!this.cache[this.activeKey]){//判断是否有缓存
      //如果没有再触发actions调用接口
        this.getsubmenu(this.payload)//传给触发actions
      }
      //如果有就不用再调接口
    }
  },
  beforeDestroy(){
    //利用mutations清缓存
    this.clearcache()
  }
}
</script>

<style scoped lang='scss'>
.jd-find{
  width: 8.28rem;
  height: 100%;
  position: relative;
  .left{
    position:absolute;
    left: 0;
    top: 0.92rem;
    bottom: 1.03rem;
    width: 2.60rem;
    overflow: auto;
    .van-sidebar-item::before{
      width: 0;
      height: 0;
    }
    .van-sidebar-item{
      display: flex;
      width: 2.6rem;
    }
  }
    .right{
    position: absolute;
    left: 1.6rem;
    top: 0.92rem;
    bottom: 1.03rem;
    right: 0;
    overflow: auto;
    background: #fff;
    }
}
</style>