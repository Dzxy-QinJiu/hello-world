<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      class="province"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      class="city"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from "./select.vue";
import { SET_POSITION } from "@/store/mutation-types";
export default {
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      searchWord: "",
      loading: false,
      cityDisabled: true
    };
  },
  components: {
    MSelect
  },
  created() {
    this.$api.getProvince().then(res => {
      if (res.status === "success") {
        console.log("getProvince:", res.msg);
        this.provinceList = res.data.map(item => {
          item.name = item.provinceName;
          return item;
        });
      } else {
        console.log("getProvince:", res.msg);
      }
    });
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCity(item) {
      this.city = item.name;
      this.$store.commit(SET_POSITION, {position:item.name});
      this.$router.push({ name: "index" });
    },
    remoteMethod(val) {
      // 请求后端接口
      console.log(document.cookie, localStorage);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
