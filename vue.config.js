module.exports={
    devServer:{
        // host:'10.36.138.51',//自己的IP地址
        port:8081,//改端口
        open:true,//浏览器打开
        proxy:{//代理模式
            '/api':{
                target:'http://localhost:4444',//服务器地址
                changeOrigin:true
            }
        }
    }
}