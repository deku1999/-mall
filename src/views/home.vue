<template>
  <div>
      <Sort ref="sort" @toggle="change" @toggle2="change2" @toggle3="change3"></Sort>
      <Bot :products="filter_product"></Bot>
  </div>
</template>

<script>
import Sort from './home/sort'
import Bot from './home/bot'
export default {
  name: 'home',
  data() {
    return {
      order: '默认',
      color: '',
      brand: ''
    }
  },
  components: {
      Sort,
      Bot
  },
  methods: {
    change(brand) {
      this.brand = brand
    },
    change2(color) {
      this.color = color
    },
    change3(order) {
      this.order = order
    }
  },
  computed: {
      product() {
          return this.$store.state.product
      },
      filter_product() {
          let list = [...this.product]
          if(this.order!==''){
              if(this.order==='默认') list = list
              if(this.order==="销量"){
                  list =  list.sort((a,b) => {
                      return b.sales - a.sales
                  })
              }
              if(this.order==='价格') {
                 list = list.sort((a,b) => {
                      return b.cost - a.cost
                  })
              }
          }
          if(this.color!==''){
              list = list.filter(item => {
                  return item.color === this.color
              })
          }
          if(this.brand!=='') {
              list = list.filter(item => {
                  return item.brand === this.brand
              })
          }
          return list
      }
  },
  created() {
      console.log('我被创建了')
  }
}
</script>

<style scoped>
</style>