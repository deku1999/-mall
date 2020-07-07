<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from 'components/tabbar/BotBar'
export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>

<style>
@import '~assets/css/base.css';
</style>
