<template>
  <div id="sort">
    <sort-nav></sort-nav>
    <bscroll class="content" ref="scroll">
    <sort-type :type-list="sortlist" @typeLoad="typeloaded"></sort-type>
    </bscroll>
  </div>
</template>

<script>
import {getCategory,getCategoryTop,getCategorySub} from 'network/category'
import bscroll from 'components/bs/BetterScroll'
import SortNav from './childsort/SortNav'
import SortType from './childsort/SortType'
export default {
  name: 'sort',
  data() {
    return {
      sortlist: [],
      currentType: '',
      goodslist: {}
    }
  },
  components: {
    bscroll,
    SortNav,
    SortType
  },
  computed: {
    showToplist() {
      return this.goodslist[this.currentType].listTop
    },
    showBotlist() {
      return this.goodslist[this.currentType].listBot
    }
  },
  created() {
    getCategory().then(res => {
      console.log(res)
      this.sortlist = res.data.data.category.list
      this.currentType = this.sortlist[0].title
      for(let i=0;i<this.sortlist.length;i++) {
        let obj = {'listTop':[],'listBot':[]}
        obj.maitKey = this.sortlist[i].maitKey
        obj.miniWallkey = this.sortlist[i].miniWallkey
        let a = this.sortlist[i].title
        this.goodslist[a] = obj
      }
    // getCategoryTop(this.goodslist[this.currentType].maitKey).then(res => {
    //   console.log(res)
    // })
    // getCategorySub(this.goodslist[this.currentType].miniWallkey,this.currentType).then(res => {
    //   console.log(res)
    // })
    })
  },
  methods: {
    typeloaded() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#sort{
  height: 100vh;
  position: relative;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 45px;
  left: 0;
  background-color: #eee;
}
</style>