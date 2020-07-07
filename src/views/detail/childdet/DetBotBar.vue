<template>
  <div class="botbar">
      <div class='font'>
          <span class="serve"></span>
          <span>客服</span>
      </div>
      <div class='font'>
          <span class="store"></span>
          <span>店铺</span>
      </div>
      <div class='font'>
          <span class="collect"></span>
          <span>收藏</span>
      </div>
      <div @click="addToCart">加入购物车</div>
      <div>购买</div>
  </div>
</template>

<script>
export default {
  name: 'DetBotBar',
  methods: {
      addToCart() {
          this.$emit('addToCart')
      }
  }
}
</script>

<style scoped>
.botbar{
    height: 49px;
    display: flex;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
}
.botbar div{
    flex: 1;
}
.botbar div:last-child{
    background-color: var(--color-tiny);
    color: #fff;
    line-height: 49px;
}
.botbar div:nth-of-type(4){
    background-color: yellow;
    line-height: 49px;
}
span:first-child{
    display: block;
    width: 25px;
    height: 25px;
    margin: 0 auto;
    background-size: cover;
}
.serve{
    background: url('~assets/img/detail/detail_bottom.png')  no-repeat 0 -60px;
}
.store{
    background: url('~assets/img/detail/detail_bottom.png')  no-repeat 0 -115px;
}
.collect{
    background: url('~assets/img/detail/detail_bottom.png') no-repeat 0 0;
}
.font{
    font-size: 14px;
    padding: 5px 0 0;
}
</style>