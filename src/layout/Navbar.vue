<template>
  <div class="menu-container">
    <div class="menu-item" v-for="(item, index) in menuList" :key="index">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuList: [
        {
          label: "首页",
          value: "/"
        },
        {
          label: "添加",
          value: "/add"
        },
        {
          label: "我的",
          value: "/user"
        }
      ]
    };
  }
};
</script>

<style scoped>
.menu-container {
  height: 100%;
  padding: 10px;
  -webkit-app-region: drag;
  display: flex;
  justify-content: flex-end;
}

.menu-item {
  padding: 5px 10px;
  font-weight: bold;
}
</style>
