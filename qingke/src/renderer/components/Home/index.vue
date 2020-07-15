<template>
  <div class="container">
    <div class="home-header">
      <el-button type="primary" icon="el-icon-plus">添加</el-button>
      <el-input v-model="search" placeholder="搜索" style="width: 500px;">
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
    </div>

    <div class="home-content">
      <site-card class="home-card" v-for="item in 20" :key="item" />
    </div>
  </div>
</template>

<script>
import siteCard from "./components/siteCard";

export default {
  name: "Home",
  components: {
    siteCard
  },
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
}

.home-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .home-card {
    width: 30%;
    margin-bottom: 30px;
    cursor: pointer;
  }
}
</style>
