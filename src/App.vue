<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  name: 'App',
  components: { // 局部注册
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
