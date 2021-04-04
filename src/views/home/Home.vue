<template>
    <!-- jd-home要加上绝对定位 -->
    <div class="jd-home" ref="hom" @scroll="top=$event.srcElement.scrollTop">
      <!-- 下拉刷新 -->
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 通知栏 -->
      <van-notice-bar mode="closeable">
        打开京东App，购物更轻松
        <template #left-icon>
            <span class="iconfont icon-jingdong logo"></span>
        </template>
        </van-notice-bar>
   <!-- 通知栏结束 -->
      <!-- 头部搜索框 -->
      <van-search
        shape="round"
        :show-action='false'
        background="#C82519"
        :placeholder="tip"
      >
      <!-- 插槽 -->
      <template #left>
        <span class="iconfont icon-caidan"></span>
      </template>
      <template #label>
        <span class="iconfont icon-jingdong1"></span>
      </template>
      <template #action>
        登录
      </template>
      </van-search>
    <!-- 头部搜索框end -->
    <!-- 轮播 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" class="jd-swipe">
      <van-swipe-item v-for="image in images" :key="image.id">
        <img :src="$img.baseImg+image.img" />
      </van-swipe-item>
    </van-swipe>
    </div>
    <!-- 轮播end -->
    <!-- 图标 -->
    <van-grid :column-num='5'  :border='false'>
      <van-grid-item
        v-for='item in username'
        :key='item.id'
      >
         <template>
          <div class="f-grid-item">
            <span :class="item.class" :style="'color:'+item.color+';font-size:0.62rem'"></span>
            <span v-text="item.text"></span>
          </div>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 图标结束 -->
    <!-- 商品列表 -->
    <div class="jd-list">
      <!-- 下拉触底提示 -->
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          offset='300'
          :immediate-check='false'
        >
        <!-- 渲染列表 -->
      <van-row v-for="item in half" :key='item'>
          <van-col span="12">
            <GoodItem :good='listArr[2*item-2] || {}' />
          </van-col>
          <van-col span="12" > 
            <GoodItem :good='listArr[2*item-1] || {}' />
            </van-col>  
      </van-row>
      </van-list>
    </div>
    <!-- 商品列表结束 -->

    <!-- 下拉刷新 -->
    </van-pull-refresh>
    <!-- 底部导航组件 -->
    <jdTabbar />
    </div>
</template>

<script>
//导入拥有全局的组件
  import {jdTabbar,GoodItem} from '@/components'
  export default {
     components: {
       jdTabbar,
       GoodItem
    },
    data(){
      return {
        loading:false,// 当滚动条抵达小于offset时它是true，当它是true时无法进行第二次触底
        refreshing:false,// 在下拉过程中它是true，当它是true时无法进行第二次下拉
        finished:false,//当它是true时无法加载，false就一直加载
        page:1,
        top:0,
        tips:[
          {id:1,text:'保温杯'},
          {id:2,text:'苹果'},
          {id:3,text:'耳机'},
          {id:4,text:'电脑'},
          {id:5,text:'手机'},
        ],
        images:[],
        username:[
          {id:1,text:'京东超市',class:'iconfont icon-gouwuche1',color:'#FB3435'},
          {id:2,text:'数码电器',class:'iconfont icon-dianshi',color:'#6995F3'},
          {id:3,text:'京东服饰',class:'iconfont icon-yifu',color:'#FA4286'},
          {id:4,text:'京东生鲜',class:'iconfont icon-chufangyongpin-',color:'#60C312'},
          {id:5,text:'京东到家',class:'iconfont icon-jingdongdaojia',color:'#38CE51'},
          {id:6,text:'充值缴费',class:'iconfont icon-chongzhi',color:'#6A97F1'},
          {id:7,text:'9.9元拼',class:'iconfont icon-niu',color:'#FBC54A'},
          {id:8,text:'领券',class:'iconfont icon-youhuijuan',color:'#FE9E08'},
          {id:9,text:'领金贴',class:'iconfont icon-gezhongjintie',color:'#FA3887'},
          {id:10,text:'PLUS会员',class:'iconfont icon-huangguan',color:'#FEAC04'},
        ],
        listArr:[]
      }
    },
    computed:{
      tip(){
        return this.tips[Math.floor(Math.random()*5)].text
      },
      half(){
        return Math.floor(this.listArr.length/2)
      }
      
    },
    methods:{
       //下拉刷新
      onRefresh(){
        // console.log('触发下拉刷新')
        this.page=1
        this.init()
      },
      // 当滚动条抵达指定位置时触发
      onLoad(){
        // console.log('触底了，准备调用下一页的数据')
        this.page++
        this.init()
      },
      init(){//封装接口方便调用
          const params={
          size:10,
          page:this.page
        }
        this.$api.homelist(params).then(res=>{
          if(this.listArr.length>=res.total){//大于后端返回的数据时
            this.finished=true//当后端返回的数据加载完，显示没有更多了
          }
          if(this.page==1){
             this.refreshing = false// 在下拉过程中它是true，当它是true时无法进行第二次下拉
             this.listArr=res.list//刷新时覆盖
             this.finished=false//刷新后又有数据了
          }else{
            this.listArr=[...this.listArr,...res.list]//追加
            this.loading=false//每次到底自动加载下一页的数据
          }
           
        })
      }
    },
    mounted(){
      this.init()
      this.$api.findbanner().then(res=>{
        console.log(res)
        this.images=res.list
      })
    },
    activated(){//配合keep-alive使用，表示激活时触发
      this.$refs.hom.scrollTop=this.top
    }
  }
</script>

<style scoped lang='scss'>
.jd-home{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  .iconfont.logo{
    font-size: 0.7rem;
    // color: #F53316;
    margin-right: 0.5rem;
  }
  .van-notice-bar{
    background: #000;
    color: #ffff;
  }
   .notice-swipe {
    height: 0.4rem;
    line-height: 0.4rem;
  }
  .icon-caidan{
    color: #ffff;
    font-size: .7rem;
    margin-right: 0.05rem;
  }
  .icon-jingdong1{
    color: #C82519;
  }
  .iconfont{
    font-size: .32rem;
  }
  .van-search__action{
    color: #ffff;
  }
  .carousel{
    background:#C82519;
  }
   .carousel{
    height: 1.5rem;
    margin-top: -0.2rem;
    border-bottom-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }
  .jd-swipe.van-swipe{
    height: 2.8rem;
    width: 7.6rem;
    margin: .13rem auto;
    border-radius: .27rem;
    img{
      display: block;
      width: 100%;
      height: 100%;
      border-radius: .27rem;
    }
  }
  .van-grid{
    margin-top: 1.5rem;
  }
  .f-grid-item {
      img {
        display: block;
        margin: 0 auto;
        width: 0.75rem;
        height: 0.73rem;
      }
      span{
        display: block;
        margin-top: 0.1rem;
      }
      // width: 1.3rem;
      font-size: .12rem;
      text-align: center;
      color: #666;
    }

  .jd-list{
    margin-bottom: 2rem;
  }
}
</style>