//全局定义Dialog弹窗
import Vue from 'vue'
import { Dialog } from 'vant';
Vue.use(Dialog)

//消息确认弹窗
const confirm=options=>{
    return Dialog.confirm({
        title: options.title,
        message: options.message,
      })
};

//消息提示
const alert=options=>{
    return Dialog.alert({
        title: options.title,
        message: options.message,
      })
  }

export default{
    alert,
    confirm
}