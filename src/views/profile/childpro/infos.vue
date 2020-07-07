<template>
  <div class="infos">
      <div><img src="~assets/img/common/邮件.svg" alt="">我的消息</div>
      <div><img src="~assets/img/common/积分.svg" alt="">积分商城</div>
      <div><img src="~assets/img/common/会员卡管理.svg" alt="">会员卡</div>
  </div>
</template>

<script>
export default {
  name: 'infos',
}
</script>

<style scoped>
.infos{
    border-bottom: 10px solid #eee;
}
.infos div{
    height: 38px;
    padding-left: 10px;
    line-height: 38px;
}
.infos div+div{
    border-top: 1px solid #eee;
}
.infos img{
    width: 15px;
    vertical-align: middle;
    margin-right: 6px;
}
</style>