<template>
  <div>
    <navbar></navbar>
    <submit></submit>
    <infof></infof>
    <infos></infos>
    <infot></infot>
  </div>
</template>

<script>
import navbar from './childpro/navbar'
import submit from './childpro/submit'
import infof from './childpro/infof'
import infos from './childpro/infos'
import infot from './childpro/infot'
export default {
  name: 'profile',
  components: {
    navbar,
    submit,
    infof,
    infos,
    infot
  }
}
</script>

<style scoped>
</style>