<template>
  <div id="detail">
      <div class="navbar">
          <div class="item" @click="back"><img src="~assets/img/common/back.svg" alt=""></div>
          <div v-for="(item,index) in titles" :key="index" class="nav-item" @click="turnArea(index)"
          :class="{active:currentIndex===index}">{{item}}</div>
      </div>
      <bscroll class="bs-content" ref="scroll" :isListenScroll="3" @ListenScroll="listenScroll">
      <!-- 轮播 -->
      <DetailSwiper :list="topImages"></DetailSwiper>
      <!-- 商品信息 -->
      <detail-goods :goods="goods"></detail-goods>
      <detail-info :detail-info="detailInfo" @imageLoad="loadimage"></detail-info>
      <detail-params :params="detailParam" ref="param"></detail-params>
      <detail-common :common-info="detCommon" ref="common"></detail-common>
      <HomeGoods :goods-list="recommend" ref="recommend"></HomeGoods>
      </bscroll>
      <backtop v-show="isShow" @click.native="backTop"></backtop>
      <DetBotBar @addToCart="addToCart"></DetBotBar>
  </div>
</template>

<script>
import {getDetailInfo,getRecommend} from 'network/detail'
import {getGoods,getParams,debounce} from 'common/util'
import DetailSwiper from './childdet/DetailSwiper'
import DetailGoods from './childdet/DetailGoods'
import DetailInfo from './childdet/DetailInfo'
import bscroll from 'components/bs/BetterScroll'
import DetailParams from './childdet/DetailParam'
import DetailCommon from './childdet/DetailCommon'
import HomeGoods from 'views/home/childhome/HomeGoods'
import DetBotBar from './childdet/DetBotBar'
import {mixBackTop} from 'common/mixin'
export default {
  name: 'detail',
  data() {
      return {
          id: '',
          titles: ['商品','参数','评论','推荐'],
          topImages: [],
          goods: {},
          detailInfo: {},
          detailParam: {},
          detCommon: {},
          recommend: [],
          currentIndex: 0,
          paramHeight: 0,
          CommonHeight: 0,
          RecomHeight: 0
      }
  },
  mixins: [mixBackTop],
  components: {
      DetailSwiper,
      DetailGoods,
      DetailInfo,
      bscroll,
      DetailParams,
      DetailCommon,
      HomeGoods,
      DetBotBar,
  },
  created() {
      this.id = this.$route.query.id
      getDetailInfo(this.id).then(res => {
          const data = res.data.result
          this.topImages = data.itemInfo.topImages
          this.goods = new getGoods(data.itemInfo,data.columns,data.shopInfo.services,data.shopInfo)
          this.detailInfo = data.detailInfo
          this.detailParam = new getParams(data.itemParams.info,data.itemParams.rule)
          this.detCommon = data.rate.cRate? data.rate.list[0] : {} 
          console.log(res)
      })
      getRecommend().then(res =>{
          this.recommend = res.data.data.list
      })
  },
  mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('imageLoad',() =>{
          refresh()

      })
  },
  methods: {
      addToCart() {
          const product = {}
          product.image = this.topImages[0]
          product.desc = this.goods.desc
          product.price = this.goods.realPrice
          product.title = this.goods.title
          product.id = this.id
          this.$store.dispatch('addCart',product).then( res => {
              this.$toast.showMessage(res)
          })
      },
      back() {
          this.$router.back()
      },
      loadimage() {
          this.$refs.scroll.refresh()
          this.paramHeight = this.$refs.param.$el.offsetTop
          this.CommonHeight = this.$refs.common.$el.offsetTop
          this.RecomHeight = this.$refs.recommend.$el.offsetTop
      },
      turnArea(index) {
          this.currentIndex = index
          switch(index) {
              case 0:
                  this.$refs.scroll.scrollTo(0,0,500)
                  break
              case 1:
                  this.$refs.scroll.scrollTo(0,-this.paramHeight,500)
                  break
              case 2:
                  this.$refs.scroll.scrollTo(0,-this.CommonHeight,500)
                  break
              case 3:
                  this.$refs.scroll.scrollTo(0,-this.RecomHeight,500)
          }
      },
      listenScroll(position) {
          let height = -position.y
          this.isShow = height>1500
          if((height>=0 && height<this.paramHeight) || height<0) {
              this.currentIndex = 0
          }
          else if(height>=this.paramHeight && height<this.CommonHeight) {
              this.currentIndex = 1
          }
          else if(height>=this.CommonHeight && height<this.RecomHeight) {
              this.currentIndex = 2
          }
          else{
              this.currentIndex = 3
          }
      }
  }
}
</script>

<style scoped>
.active {
    color: var(--color-tiny)
}
#detail{
    height: 100vh;
    position: relative;
    z-index: 9;
}
.navbar{
    height: 44px;
    align-items: center;
    display: flex;
    text-align: left;
    font-size: 15px;
    border: 1px solid #ccc;
    background-color: #fff;
    position: relative;
    z-index: 9;
}
.navbar img{
    width:22px;
}
.item{
    width: 85px;
    text-align: center;
}
.nav-item{
    flex: 1;
}
.bs-content{
    position: absolute;
    top: 44px;
    bottom:49px;
    left: 0;
    right: 0;
    background-color: #fff;
}
</style>