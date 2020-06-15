<template>
  <div class="gooditem" @click="getDetail">
    <img :src="showImage" alt="" @load="itemLoad">
    <div>
      <div class="gooditem-one">{{goodsItem.title}}</div>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemLoad() {
    if(this.$route.path.indexOf('/home')){
      this.$bus.$emit("itemImageLoad")
    }
    else{
      this.$bus.$emit('DetImageLoad')
    }
  },
    getDetail() {
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  },
  computed:{
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
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