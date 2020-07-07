<template>
  <div class="infot">
      <div><img src="~assets/img/common/购物车.svg" alt="">我的购物车</div>
      <div><img src="~assets/img/common/手提包.svg" alt="">下载购物App</div>
  </div>
</template>

<script>
export default {
  name: 'infot',
}
</script>

<style scoped>
.infot div:last-child{
    border-top: 1px solid #eee;
}
.infot div{
    height: 38px;
    padding-left: 10px;
    line-height: 38px;
}
.infot img{
    width: 15px;
    margin-right: 6px;
    vertical-align: middle;
}
</style>