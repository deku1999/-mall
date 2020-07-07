<template>
  <div>
      <div class="top">
          <div>用户评价</div>
          <div style="font-size:14px;" class="top-item">更多</div>
      </div>
      <div class="middle" v-if="commonInfo.user">
          <div class="middle-one">
              <img :src="commonInfo.user.avatar" alt="">
              <span style="margin-left:10px;">{{commonInfo.user.uname}}</span>
          </div>
          <div class="middle-two">
              <div>{{commonInfo.content}}</div>
              <div>{{commonInfo.created | showTime}}
                  <span style="margin-left:10px;">{{commonInfo.style}}</span>
              </div>
              <div class="mt-img">
                  <img v-for="(items,index) in commonInfo.images" :src="items" alt="" :key="index">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from 'common/util'
export default {
  name: 'DetailCommon',
  props: {
      commonInfo: {
          tyep: Object,
          default() {
              return {
              }
          }
      }
  },
  filters:{
      showTime(time1) {
        //   const date = new Date(time1 * 1000)
          return formatDate(time1,'yyyy-MM-dd')
      }
  }
}
</script>

<style scoped>
.top{
    height:44px;
    line-height: 44px;
    padding:0 8px 2px;
    border-top: 3px solid rgba(169,169,169,0.5);
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.top div{
    width:80px;
}
.middle-one{
    height:50px;
    padding:10px 8px 8px;
}
.middle-one img{
    width:50px;
    height:50px;
    border:1px solid #ccc;
    border-radius: 50%;
    vertical-align: middle;
}
.middle-two div{
    padding:8px;
}
.mt-img img{
    width:90px;
    height:90px;
}
</style>