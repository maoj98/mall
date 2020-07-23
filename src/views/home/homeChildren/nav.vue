<template>
  <div class="navList">
    <div  v-for="(item,value) in nav" :key="value">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }    
  },
  props: {
    nav: {}
  }
}
</script>

<style  lang="less" scoped>
  .navList {
    display: flex;
    div {
      flex: 1;
      text-align: center;
      padding: 10px 0;
      img{
        width: 80%;
        // margin-left: 10%;
      }
    }
  }
</style>