<template>
  <div class="isLike-box">
    <div class="ditu-box">
      <img src="@/assets/img/ditu.png" alt />
    </div>
    <div class="isLike">
      <h2>猜你喜欢</h2>
      <is-like-item :isLikeList="isLikeList"></is-like-item>
    </div>
  </div>
</template>

<script>
import isLikeItem from "./isLikeItem";
export default {
//   created() {
//     this.getTop();
//   },
//   methods: {
//     getTop() {
//       document.addEventListener("mousewheel", () => {
//         const dom = document.getElementsByClassName("ditu-box")[0];
//         console.log(window.pageYOffset);
//         console.log(dom);
//       });
//     }
//   },
  components: {
    isLikeItem
  },
  data() {
    return {
      isLikeList: [
        {
          title: "铁木真自助涮烤城（石景山店）",
          image:
            "https://p1.meituan.net/poi/b0588c60f5885dc1aec50fa82f579bc5178176.jpg@237w_132h_1e_1c",
          score: 2.5,
          count: 1120,
          address: "鲁谷",
          price: "87.9"
        },
        {
          title: "金真子纸上烤肉（双桥店）",
          image:
            "https://p0.meituan.net/deal/__26218156__8593562.jpg@237w_132h_1e_1c",
          score: 4.5,
          count: 11790,
          address: "亚运村",
          price: "63.0"
        }
      ]
    };
  }
};
</script>

<style>
.isLike-box {
  margin-left: 10px;
  width: calc(100% - 10px);
  /* position: relative; */
}
.isLike-box .ditu-box {
  /* position: relative; */
}
.isLike-box .ditu-box img {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
}
.isLike-box .isLike {
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
}
.isLike-box .isLike h2 {
  font-size: 16px;
  color: #333333;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 10px;
}
</style>