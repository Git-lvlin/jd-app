<template>
    <div class="user">
        <!-- 通知栏 -->
        <jdNvaBar title="个人中心" />
        <!-- 个人中心列表 -->
        <div class="top">
          <van-row>
            <van-col span="4" class="hed">
                <span class="iconfont icon-iconrenxiang self"></span>
            </van-col>
            <van-col span="16">
                <p>枼少</p>
                <p><span>京享值</span><span>小白信用7-.1</span></p>
            </van-col>
            <van-col span="4" @click="logout">设置</van-col>
          </van-row>
          <van-row class="collect">
              <van-col span="8">
                <span>0</span>
                <p>商品收藏</p>
              </van-col>
              <van-col span="8">
                  <span>1</span>
                  <p>店铺收藏</p>
              </van-col>
              <van-col span="8">
                <span>1</span>
                <p>我的足迹</p>
              </van-col>
        </van-row>
        </div>
        <!-- 通用设置 -->
        <div class="main">
          <van-row>
              <van-col span="6">
                <span>0</span>
                <p>代付款</p>
              </van-col>
              <van-col span="6">
                  <span>1</span>
                  <p>待收货</p>
              </van-col>
              <van-col span="6">
                <span>1</span>
                <p>退换/售后</p>
              </van-col>
              <van-col span="6">
                <span>1</span>
                <p>全部订单</p>
              </van-col>
          </van-row>
          <van-row>
              <van-col span="5">
                <span>0</span>
                <p>优惠券</p>
              </van-col>
              <van-col span="5">
                  <span>开通有礼</span>
                  <p>白条</p>
              </van-col>
              <van-col span="5">
                <span>30</span>
                <p>京豆</p>
              </van-col>
              <van-col span="5">
                <span>0</span>
                <p>红包</p>
              </van-col>
              <van-col span="4">
                <span>0</span>
                <p>我的资产</p>
              </van-col>
          </van-row>
          <van-row>
            <p>工具与服务</p>
          </van-row>
          <van-row>
            <van-col span="6">
              <span>0</span>
              <p>客户服务</p>
            </van-col>
            <van-col span="6">
                <span>开通有礼</span>
                <p>我的预约</p>
            </van-col>
            <van-col span="6">
              <span>30</span>
              <p>我的问答</p>
            </van-col>
            <van-col span="6">
              <span>0</span>
              <p>闲置换钱</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="6">
              <span>0</span>
              <p>高价回收</p>
            </van-col>
            <van-col span="6">
                <span>0</span>
                <p>定期购</p>
            </van-col>
          </van-row>
        </div>
        <!-- 通用设置end -->
        <!-- 商品列表 -->
        <div class="list">
          <van-row v-for="item in half" :key='item'>
              <van-col span="12">
                <GoodItem :good='listArr[2*item-2] || {}' />
              </van-col>
              <van-col span="12" > 
                <GoodItem :good='listArr[2*item-1] || {}' />
                </van-col>  
          </van-row>
        </div>
        <!-- tab导航 -->
        <jdTabbar />
    </div>
</template>

<script setup lang="ts">
//导入拥有全局的底部导航组件
import { jdTabbar,jdNvaBar,GoodItem} from '@/components'
export default{
     components: {
      jdTabbar,
      jdNvaBar,
      GoodItem
    },
    data(){
      return {
        listArr:[]
      }
    },
    computed:{
      half(){
        return Math.floor(this.listArr.length/2)
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      init(){//封装接口方便调用
          const params={
          size:10,
          page:1
        }
        this.$api.homelist(params).then(res=>{
             this.listArr=res.list
        })
      },
      logout(){
        this.$router.push('/logout')
      }
    }
  }
</script>

<style scoped lang="scss">
.user{
  padding: 1.2rem 0 1.6rem 0;
  font-size: 0.16rem;
  .top{
     background: #C82519;
    .van-row{
    display: flex;
    align-items:center;
    color: #f6f6f6;
    .hed{
      display:flex;
      justify-content: center;
    }
    .self{
      font-size: 0.8rem;
    }
  }
  .collect{
    text-align: center;
  }
  }
  .main{
    text-align: center;
    .van-row{
      margin: .5rem 0;
       background: #fff;
    }
  }
  
}
</style>