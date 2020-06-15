<template>
  <div class="goods">
      <GoodItem v-for="items in goods" :key="items.index" :goodsItem="items"></GoodItem>
  </div>
</template>

<script>
import GoodItem from "./GoodItem"
export default {
  name: 'GoodsList',
  props: {
      goods: {
          type: Array,
          default() {
              return []
          }
      }
  },
  components: {
      GoodItem
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