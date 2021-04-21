<template>
  <div class="nav-container">
    <i class="el-icon-close" @click="handleClose" />
    <i class="el-icon-back" @click="jumpTo" />
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
