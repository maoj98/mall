<template>
  <div class="tabbar">
      <TabBarItem/>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem"
export default {
    components: {
        TabBarItem
    }
}
</script>

<style scoped>
    .tabbar {
        width: 100%;
        height: 49px;
        position: fixed;
        bottom: 0;
        background-color: #f6f6f6;
        box-shadow: 0px -1px 1px rgba(150,150,150,.08);
    }
</style>>