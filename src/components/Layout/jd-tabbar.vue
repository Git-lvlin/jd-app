<template>
    <div class="jd-tabbar">
        <van-tabbar
        v-model="active"
        active-color="#20D86E"
        inactive-color="#000"
        route
        class="tabbar"
        >
            <van-tabbar-item icon="todo-list-o" to="/home">老黄历</van-tabbar-item>
            <van-tabbar-item icon="gold-coin-o" to="/find">油价</van-tabbar-item>
            <van-tabbar-item icon="logistics" to="/cart">车品牌</van-tabbar-item>
            <van-tabbar-item icon="smile-o" to="/user">笑话</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default{
    data(){
        return{
            active:1
        }
    }
}
</script>

<style scoped>
    .tabbar{
        padding: 0.15rem 0;
    }
</style>