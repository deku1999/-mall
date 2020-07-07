<template>
  <div class="type">
      <ul>
          <li v-for="(item,index) in typeList" :key="index"
          :class="{active:currentIndex===index}" @click="change(index)">{{item.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'SortType',
  data() {
      return {
          currentIndex: 0
      }
  },
  props: {
      typeList: {
          type: Array,
          default() {
              return []
          }
      }
  },
  methods: {
      change(index) {
          this.currentIndex = index
      }
  },
  mounted() {
      this.$nextTick(() => {
          this.$emit('typeLoad')
      })
  }
}
</script>

<style scoped>
.type{
    width: 100px;
    text-align: center;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
.type li{
    padding: 13px 0;
}
.active{
    background-color: #fff;
    color: var(--color-high-text);
    border-left:3px solid  var(--color-tiny);
}
</style>