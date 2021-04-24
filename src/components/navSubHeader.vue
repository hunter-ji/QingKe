<template>
  <div class="nav-container">
    <i class="el-icon-close nav-icon" @click="handleClose" />
    <i class="el-icon-minus nav-icon" @click="handleMin" />
    <i class="el-icon-back nav-icon" @click="jumpTo" />
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      let w = require("electron").remote.getCurrentWindow();
      w.close();
    },
    handleMin() {
      let w = require("electron").remote.getCurrentWindow();
      w.minimize();
    },
    jumpTo() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.nav-container {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  -webkit-app-region: drag;
}

.nav-container i {
  margin: 5px 12px;
}
</style>
