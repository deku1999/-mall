<template>
  <div class="block">
    <el-carousel height="250px" >
        <el-carousel-item v-for="item in topimages" :key="item.index" >
            <img :src="item" alt="">
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'DetailSwipper',
  props: {
      topimages: {
          type: Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style scoped>
</style>