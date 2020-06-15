<template>
  <div class="nav-bot">
      <LittleNav path="/home">
          <img src="~assets/img/Tabbar-Bar/首页.svg" alt="" slot="img">
          <img src="~assets/img/Tabbar-Bar/首页-r.svg" alt="" slot="img-c">
          <div slot="word">首页</div>
      </LittleNav>
      <LittleNav path="/sort">
          <img src="~assets/img/Tabbar-Bar/分类.svg" alt="" slot="img">
          <img src="~assets/img/Tabbar-Bar/分类-r.svg" alt="" slot="img-c">
          <div slot="word">分类</div>
      </LittleNav>
      <LittleNav path="/shop">
          <img src="~assets/img/Tabbar-Bar/购物车.svg" alt="" slot="img">
          <img src="~assets/img/Tabbar-Bar/购物车-r.svg" alt="" slot="img-c">
          <div slot="word">购物车</div>
      </LittleNav>
      <LittleNav path="/profile">
          <img src="~assets/img/Tabbar-Bar/我的.svg" alt="" slot="img">
          <img src="~assets/img/Tabbar-Bar/我的-r.svg" alt="" slot="img-c">
          <div slot="word">我的</div>
      </LittleNav>
  </div>
</template>

<script>
import LittleNav from "./LittleNav"
export default {
  name: 'TabBar',
  data () {
    return {
      
    };
  },
  components: {
      LittleNav
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.nav-bot{
    position:fixed;
    bottom: 0;
    left:0;
    right:0;
    background-color: #f6f6f6;
    display: flex;
    box-shadow:0 -3px 1px  rgba(100,100,100,0.2);
    height:49px;
}
</style>