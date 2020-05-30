<template>
  <!-- 搜索区域 -->
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link :to="{name:'index'}" tag="img" src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团"></router-link>
        <!-- <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" /> -->
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @focus="focusInput"
            @blur="blurInput"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"
            @click="searchBtn"
          ></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index+'_'+item">
              <router-link :to="{name: 'goodsList', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index+'_'+item">
              <router-link :to="{name: 'goodsList', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: null,
      searchList: null
    };
  },
  created() {
    //获取热门搜索
    this.$api.getHotSearch().then(res => {
      // console.log(res)
      if (res.status === "success") {
        console.log("getHotSearch:", res.msg);
        this.hotPlaceList = res.data;
      } else {
        console.log("getHotSearch:", res.msg);
      }
    });
  },
  computed: {
    isHotPlace() {
      return !this.searchWord && this.isFocus;
    },
    isSearchList() {
      return this.searchWord && this.isFocus;
    }
  },
  watch: {
    '$route.params.name': function () {
      this.searchWord = this.$route.params.name
    }
  },
  methods: {
    focusInput() {
      this.isFocus = true;
    },
    blurInput() {
      const self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input() {
      // console.log(this.searchWord);
      const value = this.searchWord;
      if (value) {
        this.$api.getSearchList().then(res => {
          // console.log(res);
          if (res.status === "success") {
            console.log("getSearchList:", res.msg);
            this.searchList = res.data.list;
          } else {
            console.log("getSearchList:", res.msg);
          }
        });
      }
    },
    searchBtn(){
      if(this.searchWord!=''){
        this.$router.push({name: 'goodsList', params: {name: this.searchWord}})
      }
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>