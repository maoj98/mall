<template>
  <van-swipe class="my-swipe swiper" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item,value) in banner" :key="value">
      <a :href="item" target="_brank">
        <img :src="item" alt="">
      </a>
    </van-swipe-item>
  </van-swipe>
  <!-- <div>

   </div> -->
</template>

<script>
export default {
  props: {
    banner: {

    }
  },
  created() {
    console.log(banner,)
  }
}
</script>

<style lang="less" scoped>
.swiper {
  height: 60vw;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  img {
    width: 100%;
    z-index: -1;
  }
}
</style>