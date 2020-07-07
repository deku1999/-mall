<template>
  <div class="det-info" v-if="detailInfo.detailImage">
      <div class="little"></div>
      <div class="top">
          <p>{{detailInfo.desc}}</p>
      </div>
      <div class="right bottom">
          <div class="little" style="float:right;"></div>
      </div>
      <div style="padding:8px 8px 8px;">穿着效果</div>
      <div v-for="(items,index) in detailInfo.detailImage[0].list" :key="index" class="imgitem">
          <img :src="items" alt="" @load="imageLoad">
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  data() {
      return {
          counter: 0,
          imagesLength: 0,
      }
  },
  props:{
      detailInfo: {
          type:Object,
          default() {
              return {}
          }
      }
  },
  methods:{
      imageLoad() {
          if(++this.counter === this.imagesLength )
          this.$emit("imageLoad")
      }
  },
  watch:{
      detailInfo() {
          this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
  }
}
</script>

<style scoped>
.det-info{
    padding:10px 8px 5px;
}
.little{
    width:3px;
    height:3px;
    background-color: black;
}
.top{
    width:130px;
    border-top:2px solid #000;
}
.bottom{
    width:130px;
    border-bottom: 2px solid #000;
}
.bottom>div::after{
    content:'';
    display: block;
    clear: both;
}
.right{
    float:right;
}
.right::after{
    content:'';
    display: block;
    clear: both;
}
.imgitem{
    /* height:350px;
    overflow: hidden; */
}
.imgitem img{
    width:100%;
}
</style>