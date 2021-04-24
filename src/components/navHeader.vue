<template>
  <div class="nav-container">
    <span class="nav-bg">
      <i class="el-icon-close" @click="handleClose" />
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
    jumpTo() {
      this.$router.push("/option");
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
