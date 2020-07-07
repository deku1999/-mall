<template>
  <div class="backtop">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
}
</script>

<style scoped>
.backtop img{
    width: 43px;
}
.backtop{
    position: fixed;
    bottom: 55px;
    right: 8px;
}
</style>