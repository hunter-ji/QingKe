<template>
  <div>
    <div class="layout-container">
      <div class="layout-menu">
        <Navbar />
      </div>
      <div class="layout-content">
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import AppMain from "@/layout/AppMain";
import Navbar from "@/layout/Navbar";

export default {
  name: "Layout",
  components: {
    AppMain,
    Navbar
  },
  data() {
    return {};
  }
};
</script>

<style>
.layout-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  position: relative;
}

.layout-container::before {
  content: "";
  position: absolute;
  filter: blur(10px);
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/test.jpg");
  background-size: cover;
  opacity: 0.8;
}

.layout-content {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
}

.layout-menu {
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
