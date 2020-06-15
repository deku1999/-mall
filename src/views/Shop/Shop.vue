<template>
  <div id="shop">
    <NavBar class="cat-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <BScroll class="content" ref="scroll">
      <ShopItem v-for="(item,index) in cart" :key="index" :product="item"></ShopItem>
    </BScroll>
    <BotPay class="botpay"></BotPay>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import BScroll from 'components/common/bscroll/BScroll'
import ShopItem from './childcom/ShopItem'
import BotPay from './childcom/BotPay'
import {mapGetters} from 'vuex'
export default {
  name: 'Shop',
  components: {
    NavBar,
    BScroll,
    ShopItem,
    BotPay
  },
  computed: {
    ...mapGetters(['cartLength','cart'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
#shop{
  height: 100vh;
  position: relative;
}
.cat-nav{
  background-color: var(--color-tiny);
  color: #fff;
  font-weight: 700px;
}
.content{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
  overflow: hidden;
}
.botpay{
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #eee;
}
</style>