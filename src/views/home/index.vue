<template>
  <div id="home">
    <navbar class="homeNavBar">
      <div slot="center">
        购物街
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/index"
export default {
  components: {
    navbar
  }
};
</script>
<style lang="less" scoped>
  .homeNavBar {
    background-color: #FF8198;
    color: #fff;
  }
</style>