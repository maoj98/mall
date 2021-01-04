<template>
  <van-tabs v-model="active" class="lll"  @click="getList('',1)" >
    <van-tab v-for="(item,value) in List" :key="value" :title="item" class="item" ref="scrollY">
       <div  v-for="item in tabList" :key="item.link"  class="itemList" @touchend="jumpXq(item)" @click="jumpXq(item)">
        <div>
          <img :src="item.show.img" alt="" @load="loading">
          <p> {{item.title}}</p>
          <div>
            <span>
            {{item.price}}
          </span>
          <span>
            {{item.cfav}}
          </span>
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
import request from "@/network/request"
export default {
 data() {
    return {
      active: 0,
    };
  },
  props: {
    List: {},
    tabList: {}
  },
  created(){
  },
  mounted(){
      
   
  },
  methods: {
    getList(list) {
       console.log(event.toElement.innerText)
      this.$emit("page",1),
      this.$emit("name",event.toElement.innerText)
    },
    loading() {
      this.$bus.$emit("loading")
    },
    jumpXq(data) {
      this.$router.push("/details/"+data.iid)
    }
  }
  
}
</script>

<style lang="less" scoped>
.van-tab--active {
   color: 'red' !important;
 }

 .item {
  background-color: #fff;
   .itemList {
     display: inline-block;
     margin: 1%;
     width: 48%;
     position: relative;
     img {
       width: 100%;
     }
     p{
      overflow:hidden; //超出文本隐藏
      white-space:nowrap; //溢出不换行
      text-overflow:ellipsis; //溢出省略号显示
      font-size: 12px;
     }
     div {
       text-align: center;
      span {
        display: inline-block;
        margin: 0 5px;
        font-size: 12px;
      }
     }
     
   }
 }
//  /deep/.van-tab__pane {
//    height: 500px;
//    overflow: hidden;
//  }
.lll {
  position: relative;
  z-index: 999;
}
</style>