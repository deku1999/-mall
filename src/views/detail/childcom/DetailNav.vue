<template>
  <div class="detail-nav">
      <navbar>
          <div slot="left" class="leftnav" @click="backhome">
              <img src="~assets/img/common/back.svg" alt="" >
          </div>
          <div slot="center" class="center-nav">
              <div v-for="(items,index) in titles" :key="index" 
              class="navitem"
              @click="navClick(index)"
              :class="{selected:currentIndex===index}">{{items}}</div>
          </div>
      </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar"
export default {
  name: 'DetailNav',
  components: {
      navbar
  },
  data() {
      return {
          titles: ["商品","参数",'评论','推荐'],
          currentIndex: 0
      }
  },
  methods:{
      backhome() {
          this.$router.back()
      },
      navClick(index){
          this.currentIndex = index
          this.$emit('navClick',index)
      }
  }
}
</script>

<style scoped>
.center-nav{
    color: black;
    font-size: 14px;
    display: flex;
}
.navitem{
    flex:1;
}
.leftnav img{
    margin-top: 10px;
}
.selected{
    color: var(--color-high-text)
}
</style>