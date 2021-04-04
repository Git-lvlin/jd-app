<template>
    <div class="empty" v-show="show">
        <!-- 可以复用的空提醒 -->
        <van-empty
            class="custom-image"
            image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
            description="没有商品"
            image-size='0.9rem'
        />
    </div>
</template>

<script>
export default{
    props:{
        show:{
            type:Boolean,
            required:false,
            default:false
        }
    }
}
</script>

<style scoped lang='scss'>
.custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>