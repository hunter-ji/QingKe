<template>
  <div class="nav-container">
    <span class="nav-bg">
      <i class="el-icon-close nav-icon" @click="handleClose" />
      <i class="el-icon-minus nav-icon" @click="handleMin" />
    </span>
    <div class="nav-tools" @click="jumpTo">
      <i class="el-icon-plus" />
    </div>
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
      this.$router.push("/option");
    },
  },
};
</script>

<style>
.nav-icon {
  color: #909399;
}

.nav-icon:hover {
  color: #606266;
}
</style>

<style scoped>
.nav-container {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  -webkit-app-region: drag;
}

.nav-bg {
  width: 66px;
  background: hsla(0, 0%, 100%, 0.15);
  -webkit-backdrop-filter: blur(20px);
  padding: 11px 12px;
}

.nav-bg i.el-icon-minus {
  margin-left: 24px;
}

.nav-tools {
  font-size: 16px;
  padding: 1px;
  margin: 12px 4px;
  border-radius: 4px;
}

.nav-tools i {
  margin: 5px 12px;
}

.nav-tools:hover {
  background: hsla(0, 0%, 100%, 0.35);
}
</style>
