<template>
  <div id="home">
    <navbar class="homeNavBar">
      <div slot="center">
        购物街
      </div>
    </navbar>
    <!-- 轮播图 -->
    <swiper :banner="banners"></swiper> 
    <!-- 轮播图下列表 -->
    <navList :nav="nav"></navList>
    <van-button type="info">信息按钮</van-button>
  </div>
</template>

<script>
import request from "@/network/request"
import navbar from "@/components/common/navbar/index"
import swiper from "@/views/home/homeChildren/homeSwiper"
import navList from "@/views/home/homeChildren/nav"
export default {
  data() {
    return {
      banners: '',
      nav: ''
    }
  },
created(){
    this.getList()
  },
  methods: {
    getList(){ 
      request({
        url: '/home/multidata'
      }).then(res=> {
        // console.log(res)
        this.banners = res.data.banner.list;
        this.nav = res.data.recommend.list
      })
    }
  },
  components: {
    navbar,
    swiper,
    navList
  }
};
</script>
<style lang="less" scoped>
  .homeNavBar {
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100%;
    background-color: #FF8198;
    color: #fff;
  }
</style>