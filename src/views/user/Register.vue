<template>
    <div class="register">
        <jdNvaBar title="注册">
            <template>
                <span @click="$router.push('/login')">登录</span>
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
             <van-field
                v-model="password2"
                type="password"
                name="密码"
                label="请确认密码"
                placeholder="请确认密码"
                :rules="[{ required: true, message: '请确认密码' }]"
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
            password:'',
            password2:''
        }
    },
    methods:{
        onSubmit(){
            const data={
            username:this.username,
            password:this.password,
            password2:this.password2
            }
			console.log('sadas')
            this.$api.feachRegister(data).then(res=>{
                this.username='',
                this.password=''
				this.password2=''
                if(res){
                    console.log('注册成功',res)
                    this.$router.push('/login')
                }
            })
        }
    }
}
</script>

<style scoped lang='scss'>
.register{
    .verify{
        margin-top: 1rem;
    }
}
</style>