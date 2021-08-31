<template>
    
<div class="box">
        <div class="box_img">
          <img src="@/assets/ww.jpg" alt="" class="img">
        </div>
        <div class="box_list">
          <div class="form">
              <input type="text" class="ipt" placeholder="请输入电话号" v-model="mobile"/>
              <!-- <input type="text" placeholder="请输入手机号"> -->
              <input type="text"  class="ipt" placeholder="请输入密码" v-model="password" >
              <p class="p">找回密码 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span @click=show >注册/验证码登录</span></p>
            <van-button  class="aa" size="large" color="linear-gradient(to right, #ff6034, #ee0a24)">
  登录
</van-button>
          </div>
        </div>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
        mobile:'',
        password:''
    };
  },
  mounted() {},
  methods: {
      show(){
          this.$router.push('/logins')
      }
  }
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
