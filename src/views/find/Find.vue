<template>
    <div class="jd-find">
      <jdNvaBar :active="2"/>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
      <ul v-if="falge">
        <li>city：{{result[value1].city}}</li>
        <li>92h：{{result[value1]['92h']}}</li>
        <li>95h：{{result[value1]['95h']}}</li>
        <li>98h：{{result[value1]['98h']}}</li>
        <li>0h：{{result[value1]['0h']}}</li>
      </ul>
      <ul v-else>
          <li  v-for="(item, index) in result" :key="index">{{item.city}}:{{item[value2]}}</li>
      </ul>
      <jdTabbar /> 
    </div>
</template>

<script>
//导入拥有全局的底部导航组件
import { jdTabbar,jdNvaBar} from '@/components'
export default {
  name:'Find',
  components: {
    jdTabbar,
    jdNvaBar
  },
  data(){
    return {
      value1:0,
      value2:'0h',
      option1:[],
      option2:[],
      result:[],
      falge:true,
    }
  },
  computed:{
   
  },
  methods:{
   
  },
 mounted(){
   const params={
     key:'c25fdf5465d3d3b724bbde19286c7fec'
   }
    this.$api.gnyjQuery(params).then(res=>{
        this.result=res.result
        this.option1=res.result?.map((ele,index)=>(
             {text:ele.city,value:index}
         ))
        this.option2=[
          {
            text:'98h',
            value:'98h'
          },
          {
            text:'95h',
            value:'95h'
          },
          {
            text:'92h',
            value:'92h'
          },
          {
            text:'0h',
            value:'0h'
          }
        ]
    })
  },
  watch:{
   value1:function(){
     this.falge=true
   },
   value2:function(){
     this.falge=false
   }
  },
  beforeDestroy(){
 
  }
}
</script>

<style scoped lang='scss'>
.jd-find{
  width: 8.28rem;
  height: 100%;
  position: relative;
  padding: 0 0 6rem 0;
    li{
      font-size: 0.16rem;
      text-align: center;
      padding: 0.2rem 0;
    }
     li:nth-of-type(even){
      background: #20D86E;
      color: #fff;
    }
}
</style>