<template>
  <div class="tab">
      <div v-for="(items,index) in titles" :key="index" @click="itemclick(index)">
          <span :class="{active:currentIndex===index}">{{items}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
      return {
          titles: ['流行','新款','精选'],
          currentIndex: 0
      }
  },
  methods: {
      itemclick(index) {
          this.currentIndex = index
          this.$emit('itemclick',index)
      }
  }
}
</script>

<style scoped>
.tab{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.tab div{
    flex: 1;
    font-size: 14px;
}
span{
    padding-bottom: 5px;
}
.active{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tiny);
}
</style>