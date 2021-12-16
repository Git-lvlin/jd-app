<template>
    <div class="jd-home" ref="hom">
      <jdNvaBar/>
      <van-calendar
        title="老黄历"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '260px' }"
        @select="init"
      />
      <van-grid :column-num="2">
        <van-grid-item  :text="result.baiji" />
        <van-grid-item  :text="result.chongsha" />
        <van-grid-item  :text="result.ji" />
        <van-grid-item  :text="result.jishen" />
        <van-grid-item  :text="result.wuxing" />
        <van-grid-item  :text="result.xiongshen" />
        <van-grid-item  :text="result.yi" />
        <van-grid-item  :text="result.yinli" />
      </van-grid>
      <!-- 底部导航组件 -->
      <jdTabbar />
    </div>
</template>

<script>
//导入拥有全局的组件
  import {jdTabbar,jdNvaBar} from '@/components'
  export default {
     components: {
       jdTabbar,
       jdNvaBar
    },
    data(){
      return {
        result:{},
      }
    },
    computed:{
    },
    methods:{
      init(val){//封装接口方便调用
          const params={
          date:this.$moment(val).format('YYYY-MM-DD HH:mm:ss'),
          key:'83e791b0bb8938a4db6bdfb82ee53c2c'
        }
        this.$api.laohuangli(params).then(res=>{
           this.result=res.result
        })
      }
    },
    mounted(){
      this.init(this.$moment().format("YYYY-MM-DD"))
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
  
}
</style>