<template>
  <div class="tabbar">
      <TabItem path="/home">
          <img src="~assets/img/tabbar/首页.svg" alt="" slot="normal">
          <img src="~assets/img/tabbar/首页-r.svg" alt="" slot="active">
          <span slot="text">首页</span>
      </TabItem>
      <TabItem path="/sort">
          <img src="~assets/img/tabbar/分类.svg" alt="" slot="normal">
          <img src="~assets/img/tabbar/分类-r.svg" alt="" slot="active">
          <span slot="text">分类</span>
      </TabItem>
      <TabItem path="/cart">
          <img src="~assets/img/tabbar/购物车.svg" alt="" slot="normal">
          <img src="~assets/img/tabbar/购物车-r.svg" alt="" slot="active">
          <span slot="text">购物车</span>
      </TabItem>
      <TabItem path="/profile">
          <img src="~assets/img/tabbar/我的.svg" alt="" slot="normal">
          <img src="~assets/img/tabbar/我的-r.svg" alt="" slot="active">
          <span slot="text">我的</span>
      </TabItem>
  </div>
</template>

<script>
import TabItem from './TabItem'
export default {
  name: 'Tabbar',
  components: {
      TabItem
  }
}
</script>

<style scoped>
.tabbar{
    display: flex;
    height: 44px;
    text-align: center;
}
.tabbar img{
    width: 20px;
}
</style>