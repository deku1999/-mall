<template>
  <div class="submit">
      <div style="width:120px;">
          <div class="left">
          <img src="~assets/img/common/联系人.svg" alt="">
          </div>
      </div>
      <div class="middle">
          <span>登录/注册</span>
          <div class="middle-item">
              <img src="~assets/img/common/手机.svg" alt=""><span style="padding-left:3px;">暂无绑定手机号</span>
          </div>
      </div>
      <div class="right"><img src="~assets/img/common/下一步.svg" alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'submit',
}
</script>

<style scoped>
.submit{
    display: flex;
    height: 85px;
    align-items: center;
    background-color: var(--color-tiny);
    color: #fff;
}
.left{
    width: 60px;
    background-color: #eee;
    border-radius: 50%;
    margin:0 auto;
}
.left img{
    width: 60px;
}
.middle-item img{
    width: 16px;
    vertical-align: middle;
}
.middle-item{
    margin-top: 3px;
}
.middle{
    flex: 1;
}
.right{
    width: 50px;
    text-align: center;
}
.right img{
    width: 20px;
}
</style>