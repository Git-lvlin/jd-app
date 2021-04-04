<template>
    <div class="GoodDetail">
        <jdNvaBar title="商品详情页">
        </jdNvaBar>
        <!-- 商品图片 -->
        <van-swipe
         @change="onChange"
         class="detailimg"
         >
            <van-swipe-item v-for="item in 10" :key="item">
                <img :src="$img.baseImg+detail.img" alt="">
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">{{ current + 1 }}/10</div>
            </template>
        </van-swipe>
        <!-- 商品介绍 -->
        <div class="detail">
            <p><em>￥</em><i v-text="detail.price"></i></p>
            <p v-text="detail.cate_zh"></p>
        </div>
        <!-- 商品购买导航 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
            <van-goods-action-button @click="addgoos" type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
//导入拥有全局的底部导航组件
import { 
   jdNvaBar
 } from '@/components'
  export default{
    components: {
      jdNvaBar
    },
      data(){
          return {
              current: 0,
              detail:{}
          }
      },
      methods:{
        onChange(index) {
               this.current = index;
         },
        addgoos(){
            if(localStorage.getItem('token')){
                const data={
                num:1,
                good_id:this.detail._id
            }
            this.$api.addCarList(data).then(()=>{
                 this.$router.push('/cart')
            })
            }else{
                this.$router.push('/login')
            }
        }
      },
      mounted(){
          const params={
              id:this.$route.params.id
          }
          this.$api.gooddetail(params).then(res=>{
              this.detail=res;	
          })
      }
  }
</script>

<style scoped lang='scss'>
.GoodDetail{
    padding: 0.92rem 0 0 0;
    .van-nav-bar{
            background-color: red;
    }
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .detailimg{
      height: 8.28rem;
      img{
          width: 8.28rem;
          height: 8.28rem;
      }
  }
  .detail{
      padding: 0 .5rem;
      p{
          font-size: 0.32rem;
          em{
              font-size: 0.32rem;
               color: red;
          }
          i{
              font-size: 0.64rem;
              color: red;
              font-weight: 700;
          }
      }
  }
}

</style>