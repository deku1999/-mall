<template>
  <div class="botbar">
      <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from './Tabbar'
export default {
  name: 'BotBar',
  components: {
      Tabbar
  }
}
</script>

<style scoped>
.botbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid var(--color-tiny);
    box-shadow: 0 -1px 1px var(--color-tiny);
    background-color: #fff;
}
</style>