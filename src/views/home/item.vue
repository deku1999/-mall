<template>
  <div class="item">
      <div><img :src="alone.image" alt=""></div>
      <div>{{alone.name}}</div>
      <div style="width:10px;height:10px;border:1px solid #ccc;border-radius:50%;margin:10px auto;" :class="{active:isActive}"></div>
      <div>￥{{alone.cost}}</div>
      <div class="addCart" @click="addCart(alone)">加入购物车</div>
      <div v-show="isShow" class="message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'item',
  data() {
      return {
          isShow: false
      }
  },
  props: {
      alone: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  computed: {
      message() {
          return this.$store.state.message
      },
      cart() {
          return this.$store.state.cart
      },
      isActive() {
          let length = this.cart.filter(item => item.id===this.alone.id).length
          if(length>0) {
              return true
          }
          else{
              return false
          }
      }
  },
  methods:{
      addCart(alone) {
          console.log(1)
          this.$store.commit('addToCart',alone)
          this.isShow = true
          setTimeout(() => {
              this.isShow = false
          },1000)
      }
  }
}
</script>

<style scoped>
.item{
    background-color: #fff;
    text-align: center;
    width: 300px;
    position: relative;
}
.active{
    background-color: red;
}
.message{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding:8px 10px;
    background-color: rgba(0,0,0,0.6);
    color: #fff;
    z-index: 9;
}
.item:hover .addCart{
    display: block;
}
.addCart:hover{
    color: #ff9000;
}
.addCart{
    display: none;
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    padding: 5px 8px;
}
.item div:nth-child(2){
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item div{
    margin: 10px auto;
}
.item img{
    width: 300px;
    height: 400px;
}
</style>