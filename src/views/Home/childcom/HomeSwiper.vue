<template>
  <div class="block">
    <el-carousel height="180px" >
        <el-carousel-item v-for="item in banners" :key="item.index" >
        <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad">
        </a>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
      banners: {
          type:Array,
          default(){
              return []
          }
      }
  },
  methods: {
    imageLoad() {
      this.$emit("imageLoad")
    }
  }
}
</script>
<style scoped>
.block img{
  width: 100%;
  height: 180px;
}
</style>