<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from "components/content/TabBar"
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
  @import url("./assets/css/base.css");
</style>
