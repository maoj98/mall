<template>
  <div id="home">
    <navbar class="homeNavBar">
      <div slot="center">
        购物街
      </div>
    </navbar>
    <!-- 轮播图 -->
    <betterSCroll @tabLists="tabLists">
      <swiper :banner="banners"></swiper> 
      <!-- 轮播图下列表 -->
      <navList :nav="nav"></navList>
      <fashion/>
      <TabControl class="tabcontrol" :List="['流行','新款','精选']" @name="tabLists(arguments)" @page='pages' :tabList="tabList"></TabControl>
    </betterSCroll>
  </div>
</template>

<script>
import request from "@/network/request"
import navbar from "@/components/common/navbar/index"
import betterSCroll from "@/components/common/scroll/index"
import TabControl from "@/components/content/tabcontrol"
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
      page: 1
    }
  },
created(){
    this.getList(),
    this.tabLists("流行")
  },
  methods: {
    getList(){ 
      request({
        url: '/home/multidata'
      }).then(res=> {
        this.banners = res.data.banner.list;
        this.nav = res.data.recommend.list
      })
     
    },
    tabLists(msg) {
      // console.log(msg[0],msg[1])
      if(msg == "流行") {
        this.type = 'pop'
      }else if (msg == "新款") {
        this.type = 'new'
      }else {
        this.type = 'sell'
      }
      // if(this.page == 1) {
      //   this.tabList = []
      // }
        request({
        url: '/home/data',
        params: {
          type: this.type,
          page: this.page
        }
      }).then(res=> {
        // this.tabList = res.data.list
        console.log(this.tabList)
        console.log(typeof(res.data.list))
        // push(...goodsList)
        this.tabList.push(...res.data.list)
        // console.log(this.page)
        this.page+=1
        // console.log(this.page)
      })
    },
    pages(data) {
      this.page = data
    }
  },
  components: {
    navbar,
    betterSCroll,
    TabControl,
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
    background-color: #FF8198;
    color: #fff;
  }
  
/deep/.van-tabs__wrap {
    position: sticky ;
    top: 44px ;
    z-index: 9;
  }
    </style>