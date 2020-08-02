<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" style="height: 100%;">
        <left-menu />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import leftMenu from "./views/Menu/index";

export default {
  name: "qingke",
  components: {
    leftMenu
  }
};
</script>

<style lang="scss">
$color1: #ccffcc;
$color2: #99cccc;
$color3: #ffffcc;

#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

.nothing {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  font-size: 30px;
  font-weight: bold;
  color: #909399;
  font-style: oblique;
}
</style>
