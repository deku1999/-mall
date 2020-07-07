<template>
  <div id="top">
      <div @click="ToHome">首页</div>
      <div @click="ToCart">购物车</div>
  </div>
</template>

<script>
export default {
  name: 'top',
  methods:{
      ToHome() {
          this.$router.push('/home')
      },
      ToCart() {
          this.$router.push('/cart')
      }
  }
}
</script>

<style scoped>
#top{
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    margin: 5px 2px 10px;
    text-align: center;
}
#top div{
    width: 80px;
}
</style>