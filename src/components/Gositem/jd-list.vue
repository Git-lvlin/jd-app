<template>
    <div class="item-list" @touchstart='skipToDetail'>
        <img :src="$img.baseImg+good.img" alt="">
        <div class="info">
            <span  class="jdcolr">京东超市</span>
            <span v-text='good.name' class="txt"></span>
        </div>
        <div class="bottom">
            <span class="rmb">￥</span>
            <span v-text='good.price' class="price"></span>
            <span v-if='good.hot' class="xs">看相似</span>
        </div>
    </div>
</template>

<script>
export default {
  name:'GoodItem',
  props: {
    good: { type: Object, required: false }
  },
  methods: {
    skipToDetail() {
       this.$router.push('./detail/'+this.good._id)//向详情页传递当前点击的id
    }
  }
}
</script>

<style lang="scss" scoped>
.item-list{
  flex: 1;
  height: 6.07rem;
  border-radius: .21rem;
  overflow: hidden;
  background: white;
  margin: .13rem;
  &>img {
    display: block;
    height: 3.67rem;
    width: 100%;
  }
  &>.info {
    line-height: .53rem;
    height: 1.07rem;
    color: #1a1a1a;
    font-size: .35rem;
    padding: .11rem;
    .jdcolr{
      width: 1.26rem;
      height: 0.5rem;
      text-align:center;
      border-radius: 0.1rem;
      display: block;
      font-size: 0.12rem;
      color: #fff;
      background: #C91D29;
    }
    .txt{
      display: block;
      width: 3.75rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &>.bottom {
    font-size: .43rem;
    padding: .11rem;
    position: relative;
    .rmb{
      color:#C91D29;
      font-size: 0.12rem;
    }
    .price{
      color: #C91D29;
    }
    .xs{
        display: block;
        text-align: center;
        color: grey;
        font-size: 0.12rem;
        width: 1rem;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #f0f2f5;
        border-radius: .55rem;
        border-top-right-radius: 0;
        position: absolute;
        right: 0;
        bottom: 0.1rem;
    }
  }

}
</style>