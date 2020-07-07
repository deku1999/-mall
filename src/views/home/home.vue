<template>
  <div id="home">
    <navbar></navbar>
    <TabControl @itemclick="itemClick" v-show="isShowTab" class="tab-control" ref="tabCon2"></TabControl>
    <bscroll class="scroll" ref="scroll" :is-pulling-up="true" :is-listen-scroll="3" @loadmore="LoadMore"
    @ListenScroll="ListenScroll">
    <!-- 轮播图 -->
    <home-swiper :list="banner" @imageLoad="itemImage"></home-swiper>
    <!-- 推荐内容 -->
    <home-rec :reclist="recommend"></home-rec>
    <!-- 本周流行 -->
    <home-image></home-image>
    <!-- 分类选择 -->
    <TabControl @itemclick="itemClick" ref="tabCon"></TabControl>
    <!-- 商品列表 -->
    <home-goods :goods-list="product"></home-goods>
    </bscroll>
    <back-top v-show="isShow" @click.native="goTop"></back-top>
  </div>
</template>

<script>
import {debounce} from 'common/util'
import {getHomeMultidata,getHomeGoods} from 'network/home'
import HomeSwiper from './childhome/HomeSwiper'
import navbar from './childhome/HomeNav'
import HomeRec from './childhome/HomeRec'
import HomeImage from './childhome/HomeImage'
import bscroll from 'components/bs/BetterScroll'
import TabControl from './childhome/TabControl'
import HomeGoods from './childhome/HomeGoods'
import BackTop from 'components/backtop/BackTop'
export default {
  name: 'home',
  components: {
    HomeSwiper,
    navbar,
    HomeRec,
    HomeImage,
    bscroll,
    TabControl,
    HomeGoods,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods:{
        'pop' : {
          page: 1,
          list: []
        },
        'new' :{
          page: 1,
          list: []
        },
        'sell' :{
          page: 1,
          list: []
        }
      },
      currentType: 'pop',
      isShow: false,
      isShowTab: false,
      tabHeight:0,
      leaftHeight: 0
    }
  },
  // activated() {
  //   this.$refs.scroll.scrollTo(0,this.leaftHeight,0)
  // },
  // deactivated() {
  //   this.leaftHeight = this.$refs.scroll.bscroll.y
  // },
  computed: {
      product() {
        return this.goods[this.currentType].list
      }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
    })
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('imageLoad',() => {
         refresh()
    })
  },
  methods: {
    itemClick(index) {
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
      this.$refs.tabCon.currentIndex = index
      this.$refs.tabCon2.currentIndex = index
    },
    getHomeGoods(type) {
      getHomeGoods(type,this.goods[type].page).then(res => {
         this.goods[type].page++
         this.goods[type].list.push(...res.data.data.list)
         this.$refs.scroll.finishPullUp()
      })
    },
    LoadMore() {
      this.getHomeGoods(this.currentType)
    },
    ListenScroll(position) {
        this.isShow = (-position.y)>1500
        if(this.tabHeight!==0) {
          this.isShowTab = (-position.y)>this.tabHeight
        }
      }
    ,
    goTop() {
      this.$refs.scroll.scrollTo(0,0)
    },
    itemImage() {
      if(this.tabHeight===0) {
        this.tabHeight = this.$refs.tabCon.$el.offsetTop
      }
    }
  }
  }
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.scroll{
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>