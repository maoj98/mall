<template>
  <div class="navbar">
    <div class="left">
        <slot name="left"></slot>   
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .navbar {
    display: flex;
    box-shadow: 0px 1px 1px rgba(150, 150, 150, 0.08);
    div {
      height: 44px;
      line-height: 44px;
      text-align: center;

    }

    .left,.right {
      width: 60px;
    }
    .center {
      flex: 1;
    }
  }
</style>>