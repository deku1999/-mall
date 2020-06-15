<template>
    <div class="little-com" @click="itemClick" :class="{active:isActive}">
      <div v-if="isActive">
        <slot name="img-c"></slot>
      </div>
      <div v-else>
        <slot name="img"></slot>
      </div>
      <slot name="word"></slot>
    </div>
</template>

<script>
export default {
  name: 'LittleNav',
  data () {
    return {
    };
  },
  props:{
      path:String,
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.path)!==-1
      }
  },
  components: {},
  mounted () {
  },
  methods: {
    itemClick(){
          this.$router.push(this.path)
      }
  }
}
</script>

<style scoped>

.little-com{
    margin-top:2px;
    flex : 1;
    text-align: center;
    font-size: 15px;
}
.little-com img{
  width:24px;
  height:24px;
  vertical-align: middle;
}
.active{
    color:red;
}
</style>