<template>
  <div id="app">
    <h3>App.vue</h3>
    <i class="toutiao toutiao-dianzan2"></i>
    <div class="box"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.box {
  width: 375px;
  height: 200px;
  background-color: pink;
}
</style>
