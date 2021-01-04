<template>
  <div class="details">
    <navBar/>
    <!-- 轮播 -->
    <swiper1  :banner="topImg"></swiper1>
  </div>
</template>

<script>
import navBar from "./children/navBar"
import request from "@/network/request"
import swiper1 from "./children/swiper"
export default {
  name: 'detail',
  data() {
    return {
      iid: '',
      topImg: null,
    }
  },
  components:{
    navBar,
    swiper1
  },
  created() {
   this.iid = this.$route.params.id
  },
  mounted() {

  },
  watch: {
    iid(newVal,oldVal) {
      this.getList()
      // console.log(newVal,oldVal)
    }
  },

  methods: {
    getList() {
      request({
        url: '/detail',
        params:{
          iid: this.iid
        }
      }).then(res => {
        // console.log(res)
        this.topImg = res.result.itemInfo.topImages
        // console.log(this.topImg)
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>