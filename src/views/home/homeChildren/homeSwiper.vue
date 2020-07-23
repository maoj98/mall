<template>
   <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,value) in banner" :key="value">
        <a :href="item.link" target="_brank">
          <img :src="item.image" alt="">
        </a>
      </van-swipe-item>
   </van-swipe>
</template>

<script>
export default {
  props: {
    banner: {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
    img {
      width: 100%;
      z-index: -1;
    }
  }
</style>