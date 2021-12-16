<template>
    <div class="jd-NvaBar">
        <ul class="nvaBar">
            <li :style="{color:active==1?'#20D86E':'#000'}">老黄历</li><span class="mark">| </span> 
            <li :style="{color:active==2?'#20D86E':'#000'}">油价</li><span class="mark">| </span> 
            <li :style="{color:active==3?'#20D86E':'#000'}">车品牌</li><span class="mark">| </span> 
            <li :style="{color:active==4?'#20D86E':'#000'}">笑话</li>
        </ul>
    </div>
</template>

<script>
export default{
    props: {
        active:{
            type:Number,
            required:false,
            default:1
        },
    },
    data(){
        return {

        }
    },
    methods:{
    }
}
</script>

<style scoped lang='scss'>
.jd-NvaBar{
    .nvaBar{
        display: flex;
        justify-content: center;
        background: #F6F6F6;
        padding: 0.4rem;
        .mark{
            font-size: 0.5rem;
            margin: 0 0.1rem;
        }
        li{
           font-size: 0.4rem;
        }
    }
}
</style>