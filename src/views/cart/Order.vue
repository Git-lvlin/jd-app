<template>
    <div class="jd-order">
        <jdNvaBar title="确认订单" />

        <div class="addr">
            <h2><span>枼少</span><i>15907752994</i></h2>
            <p v-text="addrArr[0].addr"></p>
            <p class="p2">收货不便时，可选择暂存服务</p>
        </div>


        <van-card
            v-for="item in orderArr"
            :key="item[0]._id"
            num="1"
            :price="item[0].price"
            :desc="item[0].desc"
            :title="item[0].name"
            :thumb="'http://localhost:4444'+item[0].img"
         >
         <template #footer>
             <p v-text="orderHao[0].order_no"></p>
         </template>
         </van-card>
        <van-submit-bar :price="sum" button-text="提交订单" @submit="onSubmit" />
    </div>
</template>

<script setup lang="ts">
import { jdNvaBar } from '@/components'
  export default{
    components:{
        jdNvaBar
    },
    data(){
        return {
          orderArr:[],//商品信息
          addrArr:[],//地址
          orderHao:[]//订单信息
        }
    },
    methods:{
        onSubmit(){
            
        }
    },
    mounted(){
        this.$api.acquireOrder().then(res=>{//获取提交的订单商品列表
            this.orderArr=res.arr
            this.orderHao=res.orderArr
        })
        this.$api.fetchCartList().then(res=>{//获取默认地址
           this.addrArr=res.addr
        })
    },
    computed:{
        sum(){//计算价格
            var s=0
            this.orderArr.map(item=>{
                s+=item[0].price*100
            })
            return s
        }
    }
  }
</script>

<style scoped lang="scss">
  .jd-order{
      padding: 0.92rem 0 1.6rem 0;
      .addr{
          background: #fff;
          font-size: 0.16rem;
          padding: .5rem;
          margin: .2rem;
          border-radius: 0.2rem;
          h2{
              i{
                  color: #999;
              }
          }
          .p2{
              color: orange;
          }
      }
  }
</style>