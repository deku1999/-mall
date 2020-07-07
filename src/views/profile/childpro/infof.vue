<template>
  <div class="infof">
      <div class="info-item">
          <div><span class="money">0.00</span>元
          <br style="height:20px;"><span>我的余额</span>
          </div>
      </div>
      <div class="info-item">
          <div><span class="money">0</span>个
          <br><span>我的余额</span>
          </div>
      </div>
      <div class="info-item">
          <div><span class="money">0</span>分
          <br><span>我的余额</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'infof',
}
</script>

<style scoped>
.infof{
    height: 85px;
    background-color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    border-bottom: 10px solid #eee;
}
.infof>div:nth-child(2),.infof>div:last-child {
    border-left: 1px solid #eee;
}
.money{
    color: #ff7733;
    font-size: 18px;
}
.info-item{
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
}
.info-item div{
    margin: 0 auto;
}
.info-item div span:last-child{
    vertical-align: -5px;
}
</style>