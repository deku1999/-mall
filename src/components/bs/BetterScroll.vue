<template>
  <div class="wrapper" ref="scroll">
      <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
      return {
          bscroll: {}
      }
  },
  props: {
      isListenScroll: {
          type: Number,
          default: 0
      },
      isPullingUp: {
          type: Boolean,
          default: false
      }
  },
  name: 'BetterScroll',
  mounted() {
      const bscroll = new BScroll(this.$refs.scroll,{
          click: true,
          pullUpLoad: this.isPullingUp,
          probeType: this.isListenScroll
      })
      this.bscroll = bscroll
      bscroll.on('pullingUp',() =>{
          this.$emit('loadmore')
      })
      bscroll.on('scroll', (position) => {
          this.$emit('ListenScroll',position)
      })
  },
  methods: {
      refresh() {
         this.bscroll.refresh()
      },
      finishPullUp() {
          this.bscroll.finishPullUp()
      },
      scrollTo(x,y,time = 1000) {
          this.bscroll.scrollTo(x,y,time)
      }
  }
}
</script>

<style scoped>
</style>