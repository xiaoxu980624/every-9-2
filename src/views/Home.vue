<template>
  <div class="home">
      
     <router-view></router-view>
     <tablebar/>
   
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import {smsCode} from "@/http/api"
import tablebar from '@/components/tablebar.vue'
export default {
  components: {
     tablebar
  },
//  async  created(){
//     let res = await  smsCode ({mobile:16261482651,sms_type:"login"})
//     console.log(res) 
//   }
}
</script>
<style>
/* .home{
  width: 100%;
}
.box{
 width: 100%;
  height: 300px;
  background: red;
} */

</style>

