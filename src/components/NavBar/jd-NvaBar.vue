<template>
    <div class="jd-NvaBar">
        <van-nav-bar    
            :title="title"
            :left-text="leftText"
            left-arrow
            @click-left="back"
            :right-text="righttext"
            :fixed='true'
            >
            <!-- 导航栏标题 -->
            <!-- <template #title>
                <slot></slot>
            </template> -->
            <!-- 导航栏右侧内容 -->
            <template #right>
                <slot></slot>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default{
    props: {
        title:{
            type:String,
            required:false,
            default:'标题'
        },
        leftText:{
            type:String,
            required:false,
            default:''
        },
        righttext:{
            type:String,
            required:false,
            default:''
        }
    },
    data(){
        return {

        }
    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped lang='scss'>

</style>