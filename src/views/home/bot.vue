<template>
<div>
  <div class='bot' v-if="products.length">
      <item v-for="(item,index) in products" :key="index" :alone="item"></item>
  </div>
  <div v-else>
      没有符合条件的商品
  </div>
</div>
</template>

<script>
import item from './item'
export default {
  name: 'bot',
  components: {
      item
  },
  props: {
      products: {
          type: Array,
          default() {
              return {}
          }
      }
  },
  data() {
      return {}
  },
  computed: {
  }
}
</script>

<style scoped>
.bot{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px 8px;
}
</style>