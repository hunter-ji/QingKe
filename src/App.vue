<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  /*background: url("./assets/bg.jpeg") no-repeat;*/
  background: hsla(0, 0%, 100%, 0.15);
  /*background-size: 100% 100%;*/
  backdrop-filter: blur(10px);
  height: 100vh;
}

.normal-bg {
  background: hsla(0, 0%, 100%, 0.35);
  backdrop-filter: blur(20px);
}

div.el-notification.left {
  background: hsla(0, 0%, 100%, 0.35);
  backdrop-filter: blur(20px);
}

div.el-message-box {
  border: none;
  background: hsla(0, 0%, 100%, 0.75);
  backdrop-filter: blur(20px);
}
</style>
