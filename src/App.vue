<template>
  <navbar></navbar>
  <router-view/>
  <tabbar/>
</template>
<script setup>

import tabbar from "./components/TabBar/Tabbar.vue"
</script>

<style lang="less">
html,body{
  margin: 0;
  padding: 0;
}
</style>
