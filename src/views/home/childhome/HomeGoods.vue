<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goodsList" :key="index" :good="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name: 'HomeGoods',
  props: {
    goodsList:{
      type: Array,
      default() {
        return {}
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>