<template>
  <div class="item">
      <Check class="checked" :check-info="product.checked" @click.native="switchCheck(product)"></Check>
      <div class="image">
          <img :src="product.image" alt="">
      </div>
      <div class="desc">
          <div class="font">{{product.title}}</div>
          <div class="font">{{product.desc}}</div>
          <div class="pri-num">
              <span style="color:orange;">￥{{product.price}}</span>
              <span>×{{product.counter}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import Check from './Check'
export default {
  name: 'ShopItem',
  props: {
      product: {
          type : Object,
          default() {
              return {}
          }
      }
  },
  components: {
      Check
  },
  methods: {
      switchCheck(product) {
          this.product.checked = !this.product.checked
      }
  }
}
</script>

<style scoped>
.item{
    display: flex;
    align-items: center;
    padding:8px 8px 8px;
    border-bottom: 2px solid #eee;
    text-align: left;
}
.checked{
    width: 20px;
    height: 20px;
    margin-right: 8px;
}
.image img{
    width: 90px;
    height: 120px;
    border-radius: 5px;
}
.desc{
    flex: 1;
    padding: 0 10px 0;
}
.desc div:first-child{
    font-size: 18px;
    padding: 0 0 30px;
}
.desc div:nth-child(2){
    font-size: 14px;
    padding: 0 0 30px;
}
.desc div:last-child{
    display: flex;
    justify-content: space-between;
}
.font{
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.pri-num span{
    width: 65px;
}
</style>