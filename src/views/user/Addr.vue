<template>
    <div class="jd-addr">
        <jdNvaBar title="地址栏" />
        <van-address-list
            v-model="Addr"
            @add="onadd"
            :list="list"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            default-tag-text="默认"
        />
    </div>
</template>

<script setup lang="ts">
import {jdNvaBar} from '@/components'
export default{
    components:{
        jdNvaBar
    },
    data(){
        return {
            Addr:'',
            disabledList:[],
            list: [],
        }
    },
    methods:{
        onadd(){
           this.$router.push('/edit')
        },
        init(){
            this.$api.acquireAddr().then((res)=>{
                this.list=this.trans(res.list)
                this.Addr=res.list.find(ele=>ele.primary)._id//获取到primary为true的地址
            })
        },
        trans(list){
            return list.map(obj=>({
                id:obj._id,
                name:obj.receiver,
                tel:obj.mobile,
                address:obj.addr,
                isDefault: obj.primary,
            })
          ) 
        }
    },
    mounted(){
        this.init()
    },
    watch:{
        Addr(){
            var params={
                addr_id:this.Addr
            }
            this.$api.alterAddr(params).then(()=>{//修改默认地址接口
                this.init()
            })
        }
    }
}
</script>

<style scoped lang='scss'>
  .jd-addr{
      padding: 0.92rem 0 1.6rem 0;
  }
</style>