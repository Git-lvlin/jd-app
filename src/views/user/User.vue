<template>
    <div class="user">
        <jdNvaBar :active="4" />
        <div v-for="item in list" :key="item.hashId">
          <p>{{item.content}}</p>
          <van-divider />
        </div>
        <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
        <!-- tab导航 -->
        <jdTabbar />
    </div>
</template>

<script setup lang="ts">
//导入拥有全局的底部导航组件
import { jdTabbar,jdNvaBar} from '@/components'
export default{
     components: {
      jdTabbar,
      jdNvaBar,
    },
    data(){
      return {
        list: [],
        currentPage: 1,
      }
    },
    watch:{
      currentPage:function(val){
        this.init(val)
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      init(val){//封装接口方便调用
        const params={
          sort:'desc',
          pagesize:5,
          page:val||1,
          time:1418816972,
          key:'92eea1a0005432230e0abd12026e8ee5'
        }
        this.$api.jokeContent(params).then(res=>{
           this.list=res.result.data
        })
      },
    }
  }
</script>

<style scoped lang="scss">
.user{
  padding: 0 0.5rem 1.6rem 0.5rem;
  font-size: 0.16rem;
  
}
</style>