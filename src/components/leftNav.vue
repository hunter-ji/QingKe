<template>
  <div class="ln-container">
    <div class="ln-category">
      <div
        :class="
          menuActive === item
            ? 'ln-container-item ln-container-item__active'
            : 'ln-container-item'
        "
        v-for="(item, index) in menuLists"
        :key="index"
        @click="handleSwitchMenu(item)"
      >
        {{ item }}
      </div>
    </div>
    <!--    <div class="ln-tools" @click="dialog = true">新增分组</div>-->

    <!--分组dialog-->
    <!--    <category-dialog :dialog="dialog" @close="handleDialogClose" />-->
  </div>
</template>

<script>
// import categoryDialog from "./categoryDialog";
export default {
  components: {
    // categoryDialog,
  },
  data() {
    return {
      menuLists: ["全部", "个人", "工作", "其他"],
      menuActive: this.$store.state.menuActive,
      dialog: false,
    };
  },
  methods: {
    handleSwitchMenu(menu) {
      this.$store.commit("changeMenuActive", menu);
      this.menuActive = menu;
      this.$emit("switchMenu", menu);
    },
    handleDialogClose() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.ln-container {
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: hsla(0, 0%, 100%, 0.15);
  -webkit-backdrop-filter: blur(20px);
}

.ln-category {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.ln-container-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  cursor: default;
  color: #909399;
}

.ln-container-item:hover,
.ln-container-item__active {
  color: #303133;
}

.ln-tools {
  margin-bottom: 12px;
  text-align: center;
  padding: 12px 0;
  color: #909399;
  cursor: pointer;
  font-size: 12px;
}

.ln-tools:hover {
  color: #303133;
}
</style>
