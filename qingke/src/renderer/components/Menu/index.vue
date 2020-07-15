<template>
  <div class="menu-container">
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
      青稞
    </div>
    <el-menu
      default-active="/"
      class="el-menu-vertical"
      :router="router"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">
        <i class="el-icon-monitor"></i>
        <span slot="title">站点</span>
      </el-menu-item>
      <el-menu-item index="/class">
        <i class="el-icon-paperclip"></i>
        <span slot="title">分类</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      router: true
    };
  }
};
</script>

<style lang="scss" scoped>
.menu-container {
  position: fixed;
  width: 200px;
}

.logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #545c64;
  font-size: 30px;
  font-weight: bold;
  padding: 24px;
  color: rgb(255, 255, 255);

  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
}

.el-menu-vertical {
  height: 100vh;
  width: 200px;
}
</style>
