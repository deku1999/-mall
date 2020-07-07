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
              <div class="change" style="padding:0 0 0 5px;background-color:red;color:#fff;" @click='delitem(product.id)'>删除</div>
              <span><span class="addsub" @click="additem(product.id)">+1</span>×{{product.counter}}<span class="addsub" @click="subitem(product.id)">-1</span>
              </span>
          </div>
      </div>
  </div>
</template>

<script>
import Check from './Check'
export default {
  name: 'item',
  props: {
      product: {
          type : Object,
          default() {
              return {}
          }
      }
  },
  mounted() {
      this.$nextTick(() =>{
          this.$emit('imageload')
      })
  },
  components: {
      Check
  },
  methods: {
      switchCheck(product) {
          this.product.checked = !this.product.checked
      },
      delitem(id) {
          this.$store.commit('delCart',id)
      },
      additem(id) {
          this.$store.commit('CartAdd',id)
      },
      subitem(id) {
          if(this.product.counter === 1){
              this.$toast.showMessage('只剩一个不能再减了',1000)
              return false
          }
          this.$store.commit('CartSub',id)
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
    align-items: center;
    text-align: center;
}
.font{
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.pri-num span{
    width: 90px;
}
.change{
    width: 65px;
    padding-bottom: 0;
}
.addsub{
    padding:2px 8px;
    background-color: aqua;
    color:#fff;
}
</style>