<template>
  <navbar>
    <template v-slot:left>
      <div>定位</div>
    </template>
    <template v-slot:center>
      <div>我是具名插槽one</div>
    </template>
    <template v-slot:right>
      <div>搜索</div>
    </template>
  </navbar>
  home
  <van-cell-group inset>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>

</template>

<script setup>
import navbar from "../../components/NavBar/NavBar.vue";
</script>

<style lang="less" scoped></style>
