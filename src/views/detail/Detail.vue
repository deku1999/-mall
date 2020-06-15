<template>
  <div id="detail">
      <DetailNav class="detail-nav" @navClick="goTheme" ref="nav"></DetailNav>
      <BScroll class="content" ref="scroll" :probeType="3" @scroll="listenScroll">
      <DetailSwipper :topimages="topImages"></DetailSwipper>
      <DetailGoods :goods="goods"></DetailGoods>
      <DetailInfo :detail-info="detailInfo" @imageLoad="detImageLoad"></DetailInfo>
      <DetailParam :params="detailParam" ref="params"></DetailParam>
      <DetailCommon :common-info="detCommon" ref="common"></DetailCommon>
      <GoodsList :goods="recommend" ref="remend"></GoodsList>
      </BScroll>
      <DetBotBar @addToCart="ToCart" ></DetBotBar>
      <Toast></Toast>
      <backTop @click.native="back_top" v-show="isShowBackTop"></backTop>
  </div>
</template>

<script>
import DetailNav from "./childcom/DetailNav"
import DetailSwipper from "./childcom/DetailSwipper"
import DetailGoods from './childcom/DetailGoods'
import BScroll from "components/common/bscroll/BScroll"
import DetailInfo from "./childcom/DetailInfo"
import DetailParam from './childcom/DetailParam'
import DetailCommon from './childcom/DetailCommon'
import GoodsList from 'components/content/goodslist/GoodsList'
import backTop from 'components/content/backtop/backTop'
import DetBotBar from './childcom/DetBotBar'
import Toast from 'components/common/toast/Toast'
import {debounce} from 'common/util'
import {getDetail,getGoods,getParams,getRecommend} from 'network/detail.js'
import {BackTop} from 'common/mixin'

export default {
  name: 'Detail',
  data() {
      return {
          id: null,
          topImages: null,
          goods: {},
          detailInfo: {},
          detailParam: {},
          detCommon: {},
          recommend:[],
          themeTop:[],
      }
  },
  created() {
      this.id = this.$route.params.id
      getDetail(this.id).then(res =>{
          const data = res.data.result
          console.log(data)
          this.topImages = data.itemInfo.topImages
          this.goods = new getGoods(data.itemInfo,data.columns,data.shopInfo.services,data.shopInfo)
          this.detailInfo = data.detailInfo
          this.detailParam = new getParams(data.itemParams.info,data.itemParams.rule)
          this.detCommon = data.rate.cRate? data.rate.list[0] : {} 
      })
      getRecommend().then(res =>{
          this.recommend = res.data.data.list
      })
  },
  mixins: [BackTop],
  components: {
      DetailNav,
      DetailSwipper,
      DetailGoods,
      BScroll,
      DetailInfo,
      DetailParam,
      DetailCommon,
      GoodsList,
      backTop,
      DetBotBar,
      Toast
  },
  methods: {
      detImageLoad() {
          this.$refs.scroll.refresh()
          this.themeTop.push(0)
          this.themeTop.push(this.$refs.params.$el.offsetTop)
          this.themeTop.push(this.$refs.common.$el.offsetTop)
          this.themeTop.push(this.$refs.remend.$el.offsetTop)
          this.themeTop.push(Number.MAX_VALUE)
      },
      goTheme(index) {
          this.$refs.scroll.scrollTo(0,-this.themeTop[index],400)
      },
      listenScroll(position) {
          this.isShowBackTop = (-position.y)>1500
          let positionY = -position.y
          let length = this.themeTop.length-1
          for(let i=0; i<length; i++) {
              if(positionY>=this.themeTop[i] && positionY<this.themeTop[i+1]){
                  this.$refs.nav.currentIndex = i
              }
          }
      },
      ToCart() {
          console.log(1)
          const product = {}
          product.image = this.topImages[0]
          product.desc = this.goods.desc
          product.price = this.goods.realPrice
          product.title = this.goods.title
          product.id = this.id
          this.$store.dispatch('addCart',product).then(res =>{
              this.$toast.showMessage(res)
          })
      }
  },
  mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('DetImageLoad',()=>{
          refresh()
      })
  }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
.detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
</style>