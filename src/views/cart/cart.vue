<template>
  <div id="shop">
    <top></top>
    <bscroll class="content" ref="scroll">
    <div v-if="lists.length">
    <item v-for="(item,index) in lists" :key="index" :product="item" @imageload="loadimage"></item>
    </div>
    <div v-else>
      购物车空空如也，快去选购商品吧
    </div>
    </bscroll>
    <bot class="botpay"></bot>
  </div>
</template>

<script>
import top from './childcart/top'
import item from './childcart/item'
import bot from './childcart/bot'
import bscroll from 'components/bs/BetterScroll'
export default {
  name: 'cart',
  components: {
    top,
    item,
    bot,
    bscroll
  },
  computed: {
    lists() {
      return this.$store.getters.cart
    }
  },
  methods: {
    loadimage() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#shop{
  height: 100vh;
  position: relative;
}
.content{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 84px;
  overflow: hidden;
}
.botpay{
  position: fixed;
  bottom: 44px;
  left: 0;
  right: 0;
  background-color: #eee;
}
</style>