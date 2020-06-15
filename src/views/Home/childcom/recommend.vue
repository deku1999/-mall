<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
      recommends : {
          type: Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    font-size: 14px;
    padding:10px 0 18px;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width:70px;
    height:70px;
}
.recommend-item img{
    margin-bottom: 8px;
}
</style>