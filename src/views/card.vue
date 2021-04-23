<template>
  <div class="card-container">
    <div class="card-key">{{ info.key }}</div>
    <div class="card-tools">
      <i class="el-icon-document-copy" id="copyIt" @click="handleCopy" />
      <i class="el-icon-edit-outline" @click="handleEdit" />
      <i class="el-icon-delete card-tools-delete" @click="handleDel" />
    </div>
  </div>
</template>

<script>
import { saveLists } from "../utils/dbStore";

export default {
  props: {
    info: Object,
  },
  methods: {
    handleCopy() {
      const copyEle = document.getElementById("copyIt");
      this.$copyText(this.info.value, copyEle);
      this.$notify({
        title: "提示",
        message: "复制成功",
        position: "bottom-left",
      });
    },
    handleEdit() {
      this.$router.push({
        name: "Option",
        params: this.info,
      });
    },
    handleDel() {
      this.$confirm("此操作将删除该密码, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.commit("delSimpleLists", this.info);
          saveLists(this.$store.state.lists);
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.card-container {
  width: 576px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 24px;
  border-radius: 4px;
  background: hsla(0, 0%, 100%, 0.35);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.card-container:hover {
  background: hsla(0, 0%, 100%, 0.55);
}

.card-container i {
  cursor: pointer;
}

.card-tools {
  width: 80px;
  display: flex;
  justify-content: space-between;
}

.card-tools-delete:hover {
  color: #f56c6c;
}
</style>
