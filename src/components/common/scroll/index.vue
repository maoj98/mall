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
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          pullUpLoad: {
            threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
          }
        });
        this.scroll.on('pullingUp', () => {
            console.log('上拉加载');
            this.$emit('tabLists')
            this.scroll.finishPullUp();
        })
        console.log(this.scroll)
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