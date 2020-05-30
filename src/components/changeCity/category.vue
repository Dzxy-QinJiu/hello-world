<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <template v-for="item in list">
      <dl class="m-categroy-section" v-if="cityGroup[item]" :key="item" :id="'city-'+ item">
        <dt>{{item}}</dt>
        <dd>
          <span
            v-for="city in cityGroup[item]"
            :key="city.id"
            @click="changeCity(city)"
          >{{city.name}}</span>
        </dd>
      </dl>
    </template>
  </div>
</template>
<script>
import { SET_POSITION } from "@/store/mutation-types";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: {}
    };
  },
  created() {
    this.$api.getAllCity().then(res => {
      if (res.status === "success") {
        console.log("getAllCity:", res.msg);
        var obj = {};
        res.data.forEach((item, index) => {
          if (!obj[item.firstChar.toUpperCase()]) {
            obj[item.firstChar.toUpperCase()] = [];
          }
          obj[item.firstChar.toUpperCase()].push(item);
        });
        this.cityGroup = obj;
      } else {
        console.log("getAllCity:", res.msg);
      }
    });
  },
  methods: {
    changeCity(item) {
      // console.log("item=====", item);
      this.$store.commit(SET_POSITION, { position: item.name });
      this.$router.push({ name: "index" });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>
