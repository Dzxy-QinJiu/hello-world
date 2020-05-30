<template>
  <!-- 导航区域 -->
  <el-row class="m-header m-header-topbar">
    <el-col :span="10">
      <geo-cmp/>
    </el-col>
    <el-col :span="14">
      <nav-cmp/>
    </el-col>
  </el-row>
</template>

<script>
import GeoCmp from './Geo';
import NavCmp from './Nav';
export default {
  components: {
    GeoCmp,
    NavCmp
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/header/topbar.scss';
</style>