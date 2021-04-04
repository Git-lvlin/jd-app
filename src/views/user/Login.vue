<template>
    <div class="login">
        <jdNvaBar title="登录">
             <template>
                <span @click="$router.push('/regist')">注册</span>
            </template>
        </jdNvaBar>
        <van-form @submit="onSubmit" class="verify">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
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
            username:'',
            password:''
        }
    },
    methods:{
        onSubmit(){
            const data={
                username:this.username,
                password:this.password,
            }
            this.$api.feachLogin(data).then(res=>{
                this.username='',
                this.password=''
				console.log(res)
                if(res){
                    console.log('登录成功',res)
                    //利用本地存储token，给axios请求拦截器使用
                    localStorage.setItem('token',res.token)
                    this.$router.back()// 登录成功，返回到上一页
                }
            })
        }
    }
}
</script>

<style scoped lang='scss'>
.login{
    .verify{
        margin-top: 1rem;
    }
}
</style>