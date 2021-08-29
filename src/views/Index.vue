<template>
    <div class="box">
        <!-- 导航 -->
        <div class="header">
            <div class="icon">
                <img src="@/assets/icon-sign.96f11c58.png" alt="" class="img">
            </div>
            <input type="text" class="ipt" placeholder="搜索">
            <div class="icon">
                <van-icon name="envelop-o" size="45px" class="van"/>
            </div>
        </div>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                  <img src="@/assets/8b5704ca810d7423d52350cfc405c2a.jpg"  class="banner_img" alt="">
                </van-swipe-item>
                <van-swipe-item>
                  <img src="@/assets/424840014f96541f8d6cf66eb696308.jpg" class="banner_img" alt="">
                </van-swipe-item>
        </van-swipe>
        <div class="banner">
            <div class="banner_list">
                <van-icon name="like-o" class="vant" size="40px"/>
                <span class='spn'>我喜欢</span>
            </div>
        </div>
        <!-- 资深讲师 -->
       <ul class="ul">
          <p class="goods_tea"><span class="teea">{{teachers[0].channel_info.name}}</span><span class="goods">更多></span></p>
          <li class="li" v-for="(ite,ind) in teachers[0].list" :key="ind">
            <img :src="ite.teacher_avatar" alt="" class="imgs">
            <div class="it">
              <span>{{ite.teacher_name}}</span>
              <span>{{ite.introduction}}</span>
            </div>
          </li>
       </ul>
       <ul>
          <p class="goods_tea"><span>{{teachers[1].channel_info.name}}</span><span class="goods">更多></span></p>
          <li class="li" v-for="(ite,ind) in teachers[1].list" :key="ind">
            <img class="imgse" :src="ite.cover_img" alt="">
            <div class="it">
              <span>{{ite.title}}</span>
              <span>{{ite.introduction}}</span>
            </div>
          </li>
       </ul>
       <ul>
          <p class="goods_tea"><span>{{teachers[2].channel_info.name}}</span><span class="goods">更多></span></p>
          <li  class="li" v-for="(ite,ind) in teachers[2].list" :key="ind">
            <img class="imgs" :src="ite.teacher_avatar" alt="">
            <div class="it">
              <span class="it_span">{{ite.teacher_name}}</span>
              <span class="it_span">{{ite.introduction}}</span>
            </div>
          </li>
       </ul>
    </div>
</template>

<script>
import { teacher } from "@/http/api.js";
export default {
  data() {
    return {
      teachers: [],//讲师
      // sub:[]
    };
  },
  mounted() {},
  async created() {
    let { data } = await teacher();
    console.log(data.data);
    /* console.log(data.list.list) */
    // this.sub = data.list.list
    this.teachers = data.data;
  },
  methods: {}
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;
}
.header {
  display: flex;
  width: 100%;
  height: 60px;
  /* background: yellow; */
}
.icon {
  width: 80px;
  height: 60px;
  /* background: red; */
}
.ipt {
  width: 250px;
  height: 40px;
  border-radius: 40px;
  margin-top: 10px;
}
.img {
  width: 60px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
}
.van {
  margin-top: 8px;
  margin-left: 15px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  /* background-color: #39a9ed; */
}
.banner {
  width: 100%;
  height: 80px;
  /* background: pink; */
}
.banner_list {
  width: 60px;
  height: 60px;
  /* background: red; */
  padding-left: 40px;
  /* padding-top: 15px; */
}

.spn {
  display: block;
}
.teacher {
  width: 100%;
  height: 500px;
  /* background: red; */
  /* margin-top: 20px; */
}
.li{
  display: flex;
  width: 400px;
  height: 100px;
  margin-top: 20px;
  margin-left: 10px;
  border-radius: 20px;
  background: whitesmoke;
}
.imgs{
  width: 50px;
  height: 50px;
   border-radius: 50%;
   margin-top: 20px;
   margin-left: 20px;
}
.it{
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 20px;
}
.st_span{
  width: 40px;
  height: 40px;
  /* -top: 30px; */
  /* display: inline-block; */
}

.goods_tea{
  width: 100%;
  height: 50px;
  background: grey;;
  display: flex;
  justify-content: space-between;
  align-items: center;
   /* margin-top: 20px; */
}

.imgse{
    width: 100px;
    height: 100px;
}
.banner_img{
  width: 100%;
  height: 200px;
}
</style>
