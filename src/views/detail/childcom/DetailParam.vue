<template>
  <div>
      <div class="size">
          <table>
              <tr v-for="(items,index) in params.size" :key="index">
                  <td v-for="(itemst,indext) in items" :key="indext">{{itemst}}</td>
              </tr>
          </table>
      </div>
      <div class="manner">
          <table>
              <tr v-for="(items,index) in params.out" :key="index">
                  <td v-for="(value,key,index2) in items" :key="index2">{{value}}</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParam',
  props: {
      params:{
          type: Object,
          default() {
              return {}
          }
      }
  }
}
</script>

<style scoped>
.size{
    padding: 25px 5px 8px;
    border-top: 3px solid #ccc;
}
.manner{
    padding:5px 5px 8px;
    border-top: 3px solid #ccc;
}
table{
    width:100%;
    border-collapse: collapse;
    font-size: 15px;
}
tr+tr{
    border-top: 1px solid #ccc;
}
.size td{
    width:18%;
    padding:5px;
}
tr{
    height:40px;
    text-align: center;
}
td{
    vertical-align: middle;
}
.manner td:first-child{
    width:25%;
}
.manner td:last-child{
    color:var(--color-tiny);
}
.manner td{
    text-align: left;
}
</style>