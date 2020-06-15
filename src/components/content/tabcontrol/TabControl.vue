<template>
  <div class="tab-control">
      <div v-for="(items,index) in titles" :key="items.index" @click="itemclick(index)" 
      :class="{active:currentIndex===index}" class="tab-control-item">
          <span>{{items}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
      titles: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data() {
      return {
          currentIndex: 0
      }
  },
  methods: {
      itemclick(index) {
          this.currentIndex = index
          this.$emit('tabClick',index)
      }
  }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
}
.tab-control-item{
    height:40px;
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 2px solid var(--color-tiny);
    padding: 5px;
}
</style>