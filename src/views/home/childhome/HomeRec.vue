<template>
  <div class="recommend">
      <div v-for="(item,index) in reclist" :key="index" class="item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <br><span>{{item.title}}</span>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRec',
  props:{
      reclist: Array
  }
}
</script>

<style scoped>
.recommend{
    display: flex;
    height: 100px;
    text-align: center;
    padding: 7px 0 10px;
    border-bottom: 10px solid #ccc;
}
.recommend div{
    flex: 1;
    font-size: 14px;
}
.item img{
    width: 70px;
    border-radius: 50%;
}
.item span{
    vertical-align: -5px;
}
</style>