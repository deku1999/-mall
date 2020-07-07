<template>
  <div class="item" @click="switchPage" >
      <div v-if="isNormal" class="little">
          <slot name="normal"></slot>
      </div>
      <div v-else class="little"> 
          <slot name="active"></slot>
      </div>
      <div :class="{active:!isNormal}">
          <slot name="text"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  computed: {
      isNormal() {
          if(this.$route.path.indexOf(this.path)!==-1){
              return false
          }
          else{
              return true
          }
      }
  },
  props:{
      path:String
  },
  methods: {
      switchPage() {
          this.$router.push(this.path)
      }
  }
}
</script>

<style scoped>
.item{
    flex: 1;
}
.active{
    color: #ff4200;
}
.little{
    margin-top: 3px;
}
</style>