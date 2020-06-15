<template>
  <div :class="{isChecked:checkInfo}">
      <img src="~assets/img/shop/选中.svg" alt="" v-show="checkInfo">
  </div>
</template>

<script>
export default {
  name: 'Check',
  props: {
      checkInfo: {
          type: Boolean,
          default: false
      }
  }
}
</script>

<style scoped>
div img{
    width: 20px;
    height: 20px;
}
div{
    border-radius: 50%;
    border: 1px solid #ccc;
}
.isChecked{
    background-color: red;
    border-color: red;
}
</style>