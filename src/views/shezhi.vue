<template>
    <div class="box">
        <input type="text" class="ipt" placeholder="请输入电话号" v-model="mobile"/>
        <button class="btn" @click="login">{{sms}}</button>
          <input class="ipt" type="text" v-model="sms_type" placeholder="请输入验证码">
           <input class="ipt" type="text" v-model="password" placeholder="请输入密码">
           <van-button class="btns" color="linear-gradient(to right, #ff6034, #ee0a24)">登录
</van-button>
    </div>
</template>

<script>
import login from '@/http/api.js'
export default {
    data() {
        return {
           sms:'获取验证码',
           mobile:'',
           password:'',
           sms_type:''

        };
    },
    mounted() {

    },
    methods: {
   async  login(){
          //  console.log(111)
        let res = await login({mobile:this.mobile,sms_type:'login'})
        console.log(res)
           var time=60;
           var timer = setInterval(() => {
              this.sms=`倒计时${time}后`
             if(time<=0){
                clearInterval(timer)
                this.sms='获取验证码'
             }
             time--
           }, 1000);
            // localStorage.setItem(JSON.stringify(''))
           console.log(timer)
         },
    },
};
</script>

<style scoped >
.ipt{
    width: 400px;
    height: 60px;
    margin-left: 20px;
    border: none;
}
.box{
    position: relative;
}
.btn{
  position: absolute;
  top: 25px;
  right:  15px;
  color: red;
  border: none; 
}
.btns{
    width: 400px;
    height: 60px;
    border-radius: 10px;
}
</style>
