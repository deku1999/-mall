<template>
  <div v-if="Object.keys(goods).length>0">
      <div class="top-des">
          <div class="bigdes">{{goods.desc}}</div>
          <span class="newprice">{{goods.newPrice}}</span>
          <span class="oldprice">{{goods.oldPrice}}</span>
          <span class="disdes">{{goods.discount}}</span>
      </div>
      <div class="middle">
          <div v-for="items in goods.columns" :key="items.index" class="middle-item">{{items}}</div>
      </div>
      <div class="middle-bottom">
          <span v-for="index in goods.services.length-1" :key="index" class="mb-item">
              <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
      <div class="bottom">
          <div class="bottom-one">
              <img :src="goods.shopLogo" alt="">
              <span>{{goods.shopName}}</span>
          </div>
          <div class="bottom-two">
              <div class="left two-item">
                  <div>
                      <p>{{goods.cSell}}</p>
                      <span>总销量</span>
                  </div>
                  <div>
                      <p>{{goods.cGoods}}</p>
                      <span>全部宝贝</span>
                  </div>
              </div>
              <div class="right two-item">
                  <div v-for="items in goods.shopScore" :key="items.index" class="right-little">
                      <span>{{items.name}}</span>
                      <span :class="{IsBetter:items.isBetter}" class="default">{{items.score}}</span>
                      <span :class="{IsBetter:items.isBetter}" class="default">{{items.isBetter? "高" : "低"}}</span>
                  </div>
              </div>
          </div>
          <div class="bottom-thr">
              <div>进店逛逛</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
      goods: {
          type: Object,
          default() {
              return {}
          }
      }
  }
}
</script>

<style scoped>
.bigdes{
    margin-bottom:6px;
    padding:10px 5px 0;
}
.newprice{
    color: var(--color-tiny);
    font-size:23px;
    margin-right: 5px;
}
.oldprice{
    font-size: 13px;
    color: gray;
    text-decoration: line-through;
}
.disdes{
    background-color: var(--color-tiny);
    color:#fff;
    font-size: 12px;
    padding:3px;
    vertical-align: 8px;
    border-radius: 5px;
    margin-left:5px;
}
.middle{
    display: flex;
    font-size: 13px;
    color: gray;
    margin: 20px 8px 0;
    padding-bottom:5px;
    border-bottom: 1px solid #ccc;
}
.middle-item{
    flex: 1;
    justify-content: space-between;
}
.middle div:nth-child(2){
    text-align: center;
}
.middle div:last-child{
    text-align: right;
}
.middle-bottom{
    font-size: 13px;
    height:44px;
    line-height: 44px;
    border-bottom: 2px solid #ccc;
    display: flex;
    text-align: center;
    justify-content: space-between;
}
.middle-bottom img{
    width: 13px;
}
.middle-bottom>span{
    width:110px;
}
.bottom img{
    width:50px;
    border:1px solid #ccc;
    border-radius: 50%;
    vertical-align: middle;
}
.bottom-two{
    display: flex;
    text-align: center;
    font-size: 14px;
}
.two-item{
    flex:1;
}
.left{
    display: flex;
    border-right:1px solid #ccc;
}
.left div{
    flex:1;
}
.right-little{
    display: flex;
    padding-bottom: 8px;
    justify-content: space-around;
}
.right div:last-child{
    padding-bottom: 0;
}
.right-little span{
    flex: 1;
}
.default{
    color: green;
}
.IsBetter{
    color: red;
}
.bottom-thr{
    padding:20px 40px 20px;
    text-align: center;
    border-bottom: 4px solid #ccc;
}
.bottom-thr div{
    margin:0 auto;
    width:120px;
    padding:4px;
    height:30px;
    line-height: 30px;
    background-color: rgba(169,169,169,0.2);
    border-radius: 10px;
}
</style>