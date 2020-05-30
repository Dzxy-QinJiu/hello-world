<template>
  <div class="page-changeCity">
    <el-row>
      <!-- 省份选择 -->
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市:" :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问:" :list="rencentList" />
    </el-row>
    <el-row>
      <!-- 城市列表 -->
      <category />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/province.vue";
import hot from "@/components/changeCity/hot.vue";
import Category from "@/components/changeCity/category.vue";
export default {
  data() {
    return {
      hotList: [],
      rencentList: []
    };
  },
  created() {
    this.$api.getHotCity().then(res => {
      if (res.status === "success") {
        console.log("getHotCity:", res.msg);
        this.hotList = res.data.map(item => item.name);
      } else {
        console.log("getHotCity:", res.msg);
      }
    });
    this.$api.getRencentlySearchCity().then(res => {
      if (res.status === "success") {
        console.log("getRencentlySearchCity:", res.msg);
        this.rencentList = res.data.map(item => item.name);
      } else {
        console.log("getRencentlySearchCity:", res.msg);
      }
    });
  },
  components: {
    Province,
    hot,
    Category
  }
};
</script>

<style>
</style>