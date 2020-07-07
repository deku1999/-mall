<template>
  <div v-show="isShow" class="toast">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
      return {
          isShow: false,
          message: ''
      }
  },
  methods: {
      showMessage(Message = "默认内容",duartion = 2000) {
          this.message = Message
          this.isShow = true
          setTimeout(() =>{
              this.isShow =false
              this.message = ''
          },duartion)
      }
  }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    background-color: rgba(0,0,0,0.7);
    padding: 10px 8px;
    z-index: 999;
}
</style>