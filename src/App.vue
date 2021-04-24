<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  background: hsla(0, 0%, 100%, 0.2);
  backdrop-filter: blur(10px);
  height: 100vh;
}

.normal-bg {
  background: hsla(0, 0%, 100%, 0.35);
  backdrop-filter: blur(20px);
}

div.el-message-box {
  border: none;
  background: hsla(0, 0%, 100%, 0.75);
  backdrop-filter: blur(20px);
}

div.el-notification.left,
div.el-dialog__header,
div.el-dialog__body {
  background: hsla(0, 0%, 100%, 0.35);
  backdrop-filter: blur(20px);
}
</style>
