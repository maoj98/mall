<template>
  <div id="home">
    <navbar class="homeNavBar">
      <div slot="center">
        购物街
      </div>
    </navbar>
    <!-- 轮播图 -->
    <betterSCroll @tabLists="tabLists" ref="scroll">
      <swiper :banner="banners"></swiper>
      <!-- 轮播图下列表 -->
      <navList :nav="nav"></navList>
      <fashion />
      <TabControl class="tabcontrol" :List="['流行','新款','精选']" @page='pages' @name="tabLists" :tabList="tabList" ref="tabTop"></TabControl>
    </betterSCroll>
    <top @click.native="pullup"></top>
  </div>
</template>

<script>
import request from "@/network/request"
import navbar from "@/components/common/navbar/index"
import betterSCroll from "@/components/common/scroll/index"
import TabControl from "@/components/content/tabcontrol"
import top from "@/components/content/pullup"
import swiper from "@/views/home/homeChildren/homeSwiper"
import navList from "@/views/home/homeChildren/nav"
import fashion from "@/views/home/homeChildren/fashion"
export default {
  data() {
    return {
      banners: '',
      nav: '',
      type: 'pop',
      tabList: [],
      page: 1,
      tabTop1: 0
    }
  },
  created() {
    this.getList(),
    this.tabLists("流行")
   
  },
  mounted() {
     // 监听图片加载完毕，刷新页面高度，避免上拉拉不动的现象
    this.$bus.$on('loading', () => {
      this.$refs.scroll.scroll.refresh()
    })
  
  },
  destroyed(){
    console.log("111")
  },
  methods: {
   

    // 防抖
    debounse(dun) {
    },

    getList() {
      request({
        url: '/home/multidata'
      }).then(res => {
        this.banners = res.data.banner.list;
        this.nav = res.data.recommend.list
      })

    },
    tabLists(msg) {
      console.log(msg)
      if (msg === "流行") {
        this.type = 'pop'
      } else if (msg === "新款") {
        this.type = 'new'
      } else if (msg === "精选") {
        this.type = 'sell'
      } else {
        this.type = this.type
      }
      console.log(this.type)
      request({
        url: '/home/data',
        params: {
          type: this.type,
          page: this.page
        }
      }).then(res => {
        this.tabList.push(...res.data.list)
        this.page += 1
      })
    },
    pages(data) {
      this.page = data
      this.tabList = []
      console.log(111)
    },
    pullup() {
      // console.log(this.$refs.scroll.scroll)
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    }
  },
  components: {
    navbar,
    betterSCroll,
    TabControl,
    top,
    swiper,
    navList,
    fashion
  }
};
</script>
<style lang="less" scoped>
#home {
  background-color: #eee;
  padding-top: 44px;
}
.homeNavBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #ff8198;
  color: #fff;
}
</style>