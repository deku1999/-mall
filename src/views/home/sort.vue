<template>
  <div class="sort">
      <div>
          <ul>
              <li v-for="(item,index) in logos" :key="index"
              :class="{active:(currentIndex===index)&&(!item.isFirst)}"
              @click="toggle(item,index,0)">{{item.name}}</li>
          </ul>
      </div>
      <div>
          <ul>
              <li v-for="(item,index) in colors" :key="index"
              :class="{active:(currentIndex1===index)&&(!item.isFirst)}"
              @click="toggle(item,index,1)">{{item.name}}</li>
          </ul>
      </div>
      <div class="last">
          <ul>
              <li v-for="(item,index) in orders" :key="index"
              :class="{active:currentIndex2===index}"
              @click="toggle(item,index,2)">{{item}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sort',
  data() {
      return {
          logos: [{name:'品牌',isFirst:true},{name:'Apple',isFirst:true},{name:'Beats',isFirst:true},{name:'Sonos',isFirst:true},{name:'B&O',isFirst:true},{name:'Bose',isFirst:true}],
          colors:  [{name:'颜色',isFirst:true},{name:'白色',isFirst:true},{name:'金色',isFirst:true},{name:'红色',isFirst:true},{name:'蓝色',isFirst:true}],
          orders: ['排序:','默认','销量','价格'],
          currentIndex: 0,
          currentIndex1: 0,
          currentIndex2: 1,
      }
  },
  computed: {
  },
  methods: {
      toggle(item,index,number) {
        if(index ===0) return 
        if(number===0){
            for(let i=1;i<this.logos.length;i++){
              if(i===index){
                  continue
              }
              this.logos[i].isFirst = true
          }
          this.currentIndex = index
          item.isFirst = !item.isFirst
          if((this.currentIndex===index)&&(!item.isFirst)) {
              this.$emit('toggle',item.name)
          }
          else{ 
              this.$emit('toggle','')
          }
        }
        if(number===1) {
            for(let i=1;i<this.colors.length;i++){
              if(i===index){
                  continue
              }
              this.colors[i].isFirst = true
          }
          this.currentIndex1 = index
          item.isFirst = !item.isFirst
          if((this.currentIndex1===index)&&(!item.isFirst)) {
              this.$emit('toggle2',item.name)
          }
          else{ 
              this.$emit('toggle2','')
          }
        }
        if(number===2){
            this.currentIndex2 = index
            console.log(item)
            this.$emit('toggle3',item)
        }
      }
  }
}
</script>

<style scoped>
.sort{
    background-color: #fff;
    margin: 0 8px 20px;
    padding: 10px 8px;
}
.sort li{
    float: left;
    width: 50px;
    padding: 5px;
    margin-right: 10px;
}
.sort ul::after{
    content: '';
    display: block;
    width: 0;
    height: 0;
    clear: both;
}
.sort div:not('.last'){
    margin-bottom: 10px;
}
.sort li:not(:first-child){
    border: 1px solid #ccc;
    border-radius: 3px;
}
.active{
    background-color: orange;
}
</style>