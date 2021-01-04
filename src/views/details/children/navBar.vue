<template>
  <navbar>
    <div slot="left" class="lsft" @click="exit">
      <div>
        <img src="@/assets/img/left.png" alt="">
      </div>

    </div>
    <div slot="center" class="nav">
      <div v-for="(item,index) in items" :key="item" class="nav_item" :class="index == currentIndex ? 'active' : ''" @click="tabCut(index)">{{item}} </div>
    </div>
  </navbar>
</template>

<script>
import navbar from "@/components/common/navbar/index"
export default {
  data() {
    return {
      items: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    navbar
  },
  methods: {
    exit() {
      this.$router.go(-1)
    },
    tabCut(data) {
      console.log(data)
      this.currentIndex = data
    },
    
  }
}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  .nav_item {
    flex: 1;
    font-size: 14px;
  }
}
.lsft {
  position: relative;
  div {
    width: 50%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25%;
    margin-top: -25%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.active {
  color: #ff5777;
}
</style>