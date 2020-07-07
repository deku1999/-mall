<template>
  <div class="det-swiper">
      <swiper>
          <swiper-item v-for="(item,index) in list" :key="index" class="det-swiper">
                  <img :src="item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import Swiper from 'components/swiper/Swiper'
import SwiperItem from 'components/swiper/SwiperItem'
export default {
  name: 'DetailSwiper',
  components: {
      Swiper,SwiperItem
  },
  props: {
      list:{
          type: Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style scoped>
.det-swiper{
    height: 280px;
    overflow: hidden;
}
</style>