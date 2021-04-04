<template>
  <div id="app">
      <router-view></router-view>
      <!-- 路由之间切换保存状态 -->
      <keep-alive>
        <router-view name="alive"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  }
}
</script>

<style lang='scss'>
body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #F6F6F6;
}
#app{
  width: 8.28rem;
  height: 100%;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

}
</style>
