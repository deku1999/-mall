<template>
  <div class="botpay">
      <Check class="check" :check-info="isSelectAll" @click.native="selectAll"></Check>
      <span class="allSelect">全选</span>
      <div class="total">
          <span>合计:￥{{totalPrice}}</span>
      </div>
      <div class="goCompute" @click="compute">
          去计算({{totalNum}})
      </div>
  </div>
</template>

<script>
import Check from './Check'
import {mapGetters} from 'vuex'
export default {
  name: 'BotPay',
  components: {
      Check
  },
  computed: {
      ...mapGetters(['cart']),
      totalPrice() {
          return this.cart.filter((item) =>{
              return item.checked
          }).reduce((pre,item) =>{
              return pre+(item.price)*(item.counter)
          },0)
      },
      totalNum() {
          return this.cart.filter(item =>{
              return item.checked
          }).reduce( (pre,item) =>{
              return pre+item.counter 
          },0)
      },
      isSelectAll() {
          if(this.cart.length === 0){
              return false
          }
          return !(this.cart.filter(item => !item.checked).length)
      },
      noOne() {
          const a = this.cart.filter(item => item.checked).length
          if(a===0){
              return true
          }
      }
  },
  methods:{
      selectAll() {
          if(this.isSelectAll === true){
              this.cart.forEach(element => {
                  element.checked = false
              });
          }
          else{
              this.cart.forEach(item => {
                  item.checked = true
              })
          }
      },
      compute() {
          if(this.noOne){
              this.$toast.showMessage('请先选择购买的商品')
          }
      }
  }
}
</script>

<style scoped>
.check{
    width: 20px;
    height: 20px;
}
.botpay{
    display: flex;
    height: 40px;
    align-items: center;
}
.allSelect{
    width: 40px;
    padding: 0 8px 0;
}
.total{
    width: 70px;
    flex: 1;
    text-align: center;
}
.goCompute{
    width: 75px;
    background-color: orange;
    color: #fff;
    height: 100%;
    line-height: 40px;
    text-align: center;
}
</style>