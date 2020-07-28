<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      //  scroll: {}
    }
  },
  mounted() {
    setTimeout(this.__initScroll, 20);
  },
  methods: {
    __initScroll() {
      this.$nextTick(() => {
        //$refs绑定元素
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            click: true,
            pullUpLoad: this.pullUpLoad
          });
          // console.log(this.scroll)
        } else if (!this.$refs.wrapper) {
          return;
        } else {
          this.scroll.refresh();
        }
      })
      
    },
      
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 49px; /*关键*/
  overflow: hidden;
  z-index: 1;
}
</style>