<template>
  <div id="home">
    <!-- 导航栏 -->
    <NavBar class="home-bgc"><div slot="center">购物街</div></NavBar>
     <TabControl :titles="['流行','新款','精选']" 
     class="tab-control tab-Control" @tabClick="tabClick" ref="tabControl2"  v-show="isShowTab"></TabControl>
    <BScroll class="content" ref="scroll" :probe-type="3" @scroll="backShow"
    @pullingUp="loadMore" :pullUpLoad="true">
    <!-- 轮播图 -->
    <HomeSwiper :banners="banners" @imageLoad="swiperLoad"></HomeSwiper>
    <!--信息展示 -->
    <recommends :recommends="recommends"></recommends>
    <!-- 本周流行 -->
    <Feature></Feature>
    <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" ref="tabControl1"></TabControl>
    <GoodsList :goods="showGoods"></GoodsList>
    </BScroll>
    <backTop @click.native="back_top" v-show="isShowBackTop"></backTop>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./childcom/HomeSwiper"
import recommends from "./childcom/recommend"
import Feature from "./childcom/Feature"
import TabControl from "components/content/tabcontrol/TabControl"
import GoodsList from "components/content/goodslist/GoodsList"
import BScroll from "components/common/bscroll/BScroll"
import backTop from "components/content/backtop/backTop"
import {debounce} from 'common/util'
import {getHomeMultidata,getHomeGoods} from "../../network/Home"
export default {
  name: 'Home',
  components : {
    NavBar,
    HomeSwiper,
    recommends,
    Feature,
    TabControl,
    GoodsList,
    BScroll,
    backTop
  },
  data(){
   return {
     banners: [],
     recommends : [],
     goods: {
       'pop': {page:0 ,list:[]},
       'new': {page:0, list:[]},
       'sell': {page:0, list:[]}
     },
     currentType: 'pop',
     isShowBackTop: false,
     swiperIsLoad: false,
     tabcontrolTop: null,
     isShowTab: false,
     saveY: 0
   }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on("itemImageLoad",() =>{
        refresh()
    })
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getY()
  },
  destroyed() {
    console.log("我被销毁了")
  },
  methods: {
    // 网络请求
    getHomeGoods(type) {
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page++
        this.$refs.scroll.finishPullUp()
      })
    },
    // 导航切换
    tabClick(index) {
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'    
      }
      this.$refs.tabControl2.currentIndex = index
      this.$refs.tabControl1.currentIndex = index
    },
    back_top() {
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    backShow(position) {
      this.isShowBackTop = -position.y>1000
      this.isShowTab = (-position.y)>this.tabcontrolTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperLoad() {
      if(!this.swiperIsLoad){
        this.tabcontrolTop = this.$refs.tabControl1.$el.offsetTop
        this.swiperIsLoad = true
      }
    },
    // 防抖函数
  }
}
</script>

<style scoped>
.home-bgc{
  background-color: var(--color-tiny);
}
#home{
  position: relative;
  height: 100vh;
}
.tab-control{
  background-color: #fff;
}
.content{
  position: absolute;
  overflow: hidden;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-Control{
  position: relative;
  z-index: 9;
}
</style>