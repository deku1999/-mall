<template>
  <div>
      <swiper>
          <swiper-item v-for="(item,index) in list" :key="index">
              <a :href="item.link">
                  <img :src="item.image" alt="" @load="imageLoad">
              </a>
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import Swiper from 'components/swiper/Swiper'
import SwiperItem from 'components/swiper/SwiperItem'
export default {
  name: 'HomeSwiper',
  props:{
      list:Array
  },
  components: {
      Swiper,
      SwiperItem
  },
  methods: {
      imageLoad() {
          this.$bus.$emit('imageLoad')
          this.$emit('imageLoad')
      }
  }
}
</script>

<style scoped>
</style>