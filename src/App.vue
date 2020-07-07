<template>
  <div id="app">
    <top></top>
    <keep-alive >
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Top from './components/top'
export default {
  name: 'App',
  components: {
    Top
  },
  created() {
    this.$store.dispatch('getData')
  }
}
</script>

<style>
  @import url('./assets/css/base.css');
  #app{
    border: 2px solid yellowgreen;
    background-color: #ccc;
    width: 1600px;
    margin: 0 auto;
  }
  ul,li{
    list-style: none;
  }
</style>
