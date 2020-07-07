<template>
    <div class="gooditem" @click="ToDetail(good)">
    <img :src="showImage" alt="" @load="loadImage">
    <div>
      <div class="gooditem-one">{{good.title}}</div>
      <span class="price">{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props:{
    good:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    showImage() {
      return this.good.image || this.good.show.img
    }
  },
  methods: {
    loadImage() {
      this.$bus.$emit('imageLoad')
    },
    ToDetail(item) {
      this.$router.push({
        path: '/detail',
        query: {
          id: item.iid
        }
      })
    }
  }
}
</script>

<style scoped>
.gooditem{
  width: 48%;
}
.gooditem img{
  width: 100%;
}
.gooditem>div{
  padding: 5px 0 5px;
  text-align: center;
}
.gooditem-one{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.collect{
  position: relative;
}
.price{
  margin-right: 20px;
  color:var(--color-tiny);
}
.collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") no-repeat 0 0;
    background-size: cover;
}
</style>