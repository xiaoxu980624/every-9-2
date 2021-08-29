<template>
    <div class="tabbar">
      <div class="tabbar_list" v-for="(item,index) in tabbar_list" :key="index">
        <router-link class="bar" :to="item.url" >
          <img :src="item.nav_img" alt="" class="img">
          <span class="spa">{{item.name}}</span>
        </router-link>
       
        </div>
    </div>
</template>

<script>
import {bottom} from '@/http/api.js'
export default {
  data() {
    return {
       tabbar_list:[]
    };
  },
 async  created(){
      let {data:{data:{index}}} = await bottom ()
      console.log(index)
     
      let list=['/Index','Coust','New','Books','My']
      index.forEach((element,key) => {
         element.url = list[key]
      });
      console.log(index)
       this.tabbar_list = index
  },
  mounted() {},
  methods: {
     
  }
};
</script>

<style>
.tabbar{
   position: fixed;
   bottom: 0;
   width: 100%;
   height: 88px;
   /* background: red; */
   display: flex;
   background: white;
   z-index: 9999;
}
.bar{
  /* display: flex; */
  /* /* justify-content: center; */
  align-items: center;
  flex: 1;
}
.spa{
  display: block;
align-items: center;
}
.img{
  width: 50px;
  height: 50px;
}
.tabbar_list{
  display: flex;
  flex: 20%;
  align-items: center;
}
</style>
