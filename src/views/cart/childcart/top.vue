<template>
  <div class="top">
    购物车({{number}})
  </div>
</template>

<script>
export default {
  name: 'top',
  computed: {
    number() {
      return this.$store.getters.cartlength
    }
  }
}
</script>

<style scoped>
.top{
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: var(--color-tiny);
  color: #fff;
}
</style>