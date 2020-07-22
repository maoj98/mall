<template>
  <div class="content">
    <div
      v-for="(item,value) in tabbar"
      :key="value"
      :class="{active:list==value}"
      @click="toggle(value,item.path)"
    >
      <p class="iconfont" :class="item.icon"></p>
      <p>{{item.data}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar: [
        {
          icon: "icon1",
          data: "首页",
          path: "/home"
        },
        {
          icon: "iconfenlei1",
          data: "分类",
          path: "/item"
        },
        {
          icon: "icongouwuchekong",
          data: "购物车",
          path: "/shopcar"
        },
        {
          icon: "iconwode2",
          data: "我的",
          path: "/main"
        }
      ],
      list: 0
    };
  },
  methods: {
    toggle(value, path) {
      (this.list = value), this.$router.push(path);
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  text-align: center;
  div {
    flex: 1;
    .iconfont {
      font-size: 20px;
      margin-top: 8px;
    }
    p {
      font-size: 12px;
    }
  }
}
.active {
  color: #ff5777;
}
</style>
