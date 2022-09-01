<template>
  <div class="navbar">
    <div class="navbarItem">
      <slot name="left"></slot>
    </div>
    <div class="navbarItem">
      <slot name="center"></slot>
    </div>
    <div class="navbarItem">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
  .navbar{
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>