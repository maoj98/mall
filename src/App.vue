<template>
  <div id="app">
    <router-view></router-view>
    <tabbar/>
  </div>
</template>
<script>
import tabbar from "@/components/common/tabbar"
export default {
  components: {
    tabbar
  }
}
</script>
<style>
@import "assets/css/base.css";
</style>
