<template>
  <div>
    <router-link to="/" class="isLike-item" v-for="(item,index) in isLikeList" :key="index">
      <img :src="item.image" alt />
      <p class="title">{{item.title}}</p>
      <p>
        <el-rate v-model="item.score" disabled text-color="#ff9900"></el-rate>
        <span class="pingjia">{{item.count}}个评价</span>
      </p>
      <p class="pingjia">{{item.address}}</p>
      <p class="price">
        ￥
        <span class="cur-price">{{item.price}}</span>
        起
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["isLikeList"]
};
</script>

<style>
a,
a:hover,
a:focus,
a:visited {
  color: #000;
}
.isLike-item {
  text-decoration: none;
  margin-bottom: 20px;
}
.isLike-item img {
  width: 100%;
  border-radius: 5px;
}
.isLike-item > p {
  margin-top: 5px;
}
.isLike-item .el-rate__icon {
  font-size: 15px;
}
.isLike-item .el-rate {
  display: inline-block;
}
.isLike-item .pingjia {
  font-size: 12px;
  color: #999;
  height: 24px;
  line-height: 24px;
  margin-left: 10px;
}
.isLike-item .price {
  font-size: 14px;
  font-weight: 600;
  color: #ff6600;
}
.isLike-item .price > span {
  font-size: 22px;
}
</style>