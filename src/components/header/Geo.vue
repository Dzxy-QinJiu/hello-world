<template>
  <div class="m-geo">
    <div class="m-geo">
      <div class="position">
        <i class="el-icon-location" />
        <!-- 北京 -->
        {{position}}
        <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>[
        <a href="#" v-for="item in nearCity" :key="item.id" @click="changeCity(item)">{{item.name}}</a>
        ]
      </div>
      <div class="m-user">
        <router-link class="login" :to="userName?'':{name: 'login'}">{{userName?userName:'立即登录'}}</router-link>
        <template v-if="!userName">
          <router-link class="register" :to="{name: 'register'}">注册</router-link>
        </template>
        <template v-else>
          <a class="register" @click="exitLogin">退出</a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { SET_POSITION, SET_USERNAME } from "@/store/mutation-types";
export default {
  data() {
    return {
      nearCity: null
    };
  },
  computed: {
    ...mapState(["position", "userName"])
  },
  created() {
    this.$api.getPosition().then(res => {
      // console.log(res);
      if (res.status === "success") {
        console.log('getPosition:',res.msg);
        this.$store.commit(SET_POSITION, { position: res.data.name });
        this.nearCity = res.data.nearCity;
      } else {
        console.log('getPosition:',res.msg);
      }
    });
  },
  methods: {
    exitLogin() {
      this.$store.commit(SET_USERNAME, { userName: "" });
      this.$router.push({name:'index'})
    },
    changeCity(item) {
      this.$store.commit(SET_POSITION, {position:item.name});
      this.$router.push({ name: "index" });
    }
  }
};
</script>

<style>
</style>