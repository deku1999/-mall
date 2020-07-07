<template>
  <div id="cart">
    <div v-if="cart.length>0">
    <div class="first">购物清单</div>
    <div class="second">
    <span>商品信息</span>
    <span>单价</span>
    <span>数量</span>
    <span>小计</span>
    <span>删除</span>
    </div>
    <div v-for="(item,index) in cart" :key="index" class="item">
      <span> <img :src="item.image" alt=""> {{item.name}}
      </span>
      <span>￥{{item.cost}}</span>
      <span><button @click="subtraction(item)" :disabled="item.counter<=1">-</button>{{item.counter}}<button @click="addCounter(item)">+</button></span>
      <span>￥{{item.counter*item.cost}}</span>
      <span @click="clear(item)">删除</span>
    </div>
    <div class="last">
      <div>共计{{cart.length}}件商品</div>
      <div>应付总额￥{{totalPrice}}</div>
      <div>现在结算</div>
    </div>
    </div>
    <div v-else>
      购物车还是空的，快去选购商品把
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  computed: {
    cart() {
      return this.$store.state.cart
    },
    totalPrice() {
      return this.cart.reduce((pre,item) => {
        return pre+(item.cost*item.counter)
      },0)
    }
  },
  methods: {
    subtraction(item) {
      this.$store.commit('subNumber',item)
    },
    addCounter(item) {
      this.$store.commit('addNumber',item)
    },
    clear(item) {
      this.$store.commit('delItem',item)
    }
  }
}
</script>

<style scoped>
#cart{
  margin: 15px 10px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.first{
  height: 44px;
  line-height: 44px;
  padding: 0 0 0 15px;
}
.second{
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 14px;
  background-color: var(--color-tiny);
}
.second span:not(:first-child){
  text-align: center;
  width: 150px;
}
.item span:not(:first-child) {
  text-align: center;
  width: 150px;
}
span:first-child{
  padding: 0 0 0 15px;
  flex: 1;
}
.item{
  display: flex;
  align-items: center;
  height: 44px;
}
.item span:last-child{
  color: #ccc;
}
.item img{
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.last{
  margin-top: 20px;
  margin-right:20px;
  display: flex;
  text-align: center;
  height: 44px;
  align-items: center;
}
.last div:first-child{
  text-align: right;
  flex:1;
}
.last div:nth-child(2){
  width: 200px;
  padding: 6px 8px;
}
.last div:last-child{
  width: 100px;
  padding: 6px 8px;
  background-color: #ff5000;
  color: #fff;
  border-radius: 4px;
}
</style>