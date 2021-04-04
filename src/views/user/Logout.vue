<template>
    <div class="logout">
        <!-- 通知栏 -->
        <jdNvaBar title="设置" />
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
          </van-row>
          <van-row class="collect">
              <p>我的收货地址</p>
        </van-row>
        </div>
        <!-- 通用设置 -->
        <div class="main">
          <van-row>
            <p>账户与安全</p>
          </van-row>
          <van-row>
            <p>支付</p>
          </van-row>
          <van-row>
            <p>消息通知</p>
          </van-row>
          <van-row>
            <p>隐私</p>
          </van-row>
          <van-row>
            <p>通用</p>
          </van-row>
          <van-row>
            <p>帮助与反馈</p>
          </van-row>
          <van-row>
            <p>关于手机京东</p>
          </van-row>
          <van-row class="back">
            <p>切换账号</p>
          </van-row>
          <van-row class="back">
            <p @click="logout">退出登录</p>
          </van-row>
        </div>
        <!-- 通用设置end -->
    </div>
</template>

<script setup lang="ts">
import { jdNvaBar} from '@/components'
export default{
     components: {
      jdNvaBar,
    },
    data(){
      return {
      }
    },
    computed:{
    },
    mounted(){
    },
    methods:{
        logout(){
           localStorage.removeItem('token')
           this.$router.push('/login')
        }
    }
  }
</script>

<style scoped lang="scss">
.logout{
  padding: 1.2rem 0 1.6rem 0;
  font-size: 0.16rem;
  .top{
     background: #fff;
    .van-row{
    display: flex;
    padding-left: .2rem;
    align-items:center;
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
   
    .van-row{
       text-align: left;
    //   margin: .5rem 0;
       padding-left: .2rem;
       background: #fff;
    }
    .back{
        text-align: center;
    }
  }
  
}
</style>