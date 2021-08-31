<template>
    <div class="box">
        <div class="box_img">
          <img src="@/assets/ww.jpg" alt="" class="img">
        </div>
        <div class="box_list">
          <div class="form">
              <input type="text" class="ipt" placeholder="请输入电话号" v-model="mobile"/>
              <!-- <input type="text" placeholder="请输入手机号"> -->
              <button class="btn" @click="login">{{sms}}</button>
              <input type="text" class="ipt" v-model="sms_type"  placeholder="请输入短信验证码"  @click="getsms"/>
              <!-- <input type="text" placeholder="请输入密码" > -->
              <p class="p">*未注册的手机号将自动注册 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span @click=show >使用密码</span></p>
            <van-button @click="loginn" class="aa" size="large" color="linear-gradient(to right, #ff6034, #ee0a24)">
  登录
</van-button>
          </div>
        </div>
    </div>
</template>

<script>
import {smsCode,login} from '@/http/api.js'

export default {
    data() {
        return {
            loginss:JSON.parse(localStorage.getItem('token'))||[],
            mobile:'',
             sms_type:'',// 验证码
             	sms_code:"",//登录验证码
             sms:"获取验证码",
             isshow:false,
        };
    },
    mounted() {

    },
    async created(){
       
    },
    methods: {
        async  login(){
             var ipone=/^1[3456789]\d{9}$/
             if(!ipone.test(this.mobile)||this.mobile==""){
                 return false
             }else{
               this.getsms()
                  let res = await smsCode({mobile:this.mobile,sms_type:"login"})
                  console.log(res);
                  console.log(res.data.remember_token)
                  // localStorage.setItem(JSON.stringify(res.data.remember_token))
                  // this.$router.push('/My')

             }
         },
        async  loginn(){
          if(this.mobile==''){
            return false;
          }
            let res = await login({	sms_code:this.sms_code,type:2})
            this.$router.push('/My')
             console.log(res.data.remember_token)
            localStorage.getItem(JSON.stringify(this.token))
         },
         getsms(){
          //  console.log(111)
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
         show(){
          this.$router.push('sms-logins')
         }
         
         
    },
};
</script>

<style scoped >
.box{
   width: 100%;
   height: 100%;
   /* background: red; */
}
.box_img{
  width: 100%;
  height: 300px;
}
.img{
   width: 100%;
  height: 300px;
}
.box_list{
  position: relative;
  display: flex;
  width: 100%;
  height: 900px;
  /* background: yellow; */
  margin-top: 20px;
}
.form{
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  margin: 0 auto;
  /* flex-direction: row; */
  /* line-height: 200px; */
  /* background: red; */
  /* padding-top: 40px; */
}
.ipt{
  width: 400px;
  margin-top: 20px;
  height: 50px;
  border: none;
}
/* .wlogin{
  width: 400px;
  height: 40px;
  
} */
.p{
  margin-top: 20px;
}
.aa{
  margin-top: 20px;
 
}
.btn{
  position: absolute;
  top: 25px;
  right:  15px;
  color: red;
  border: none;
  
}
.wlogin{
  width: 100%;
  height: 1000px;
}
</style>
