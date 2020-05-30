<template>
  <div class="m-hcity">
    <dl>
      <dt>{{title}}</dt>
      <dd v-for="(item, index) in list" :key="index" @click="changeCity(item)">{{item}}</dd>
    </dl>
  </div>
</template>
<script>
import {SET_POSITION} from '@/store/mutation-types'
export default {
  props: ["title", "list"],
  methods: {
    changeCity(item) {
      this.city = item;
      this.$store.commit(SET_POSITION, { position: item });
      this.$router.push({ name: "index" });
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/hot.scss";
</style>
