<template>
  <div class="option-container">
    <nav-sub-header />
    <div class="option-content">
      <el-form ref="form" :model="form" label-width="80px" class="option-form">
        <el-form-item label="key">
          <input class="normal-bg home-input" v-model="form.key" />
        </el-form-item>
        <el-form-item label="value">
          <input class="normal-bg home-input" v-model="form.value" />
        </el-form-item>
        <el-form-item>
          <div class="option-btn-group">
            <div
              class="normal-bg option-btn option-cancel-btn"
              @click="handleClose"
            >
              取消
            </div>
            <div
              class="normal-bg option-btn option-submit-btn"
              @click="handleSubmit"
            >
              提交
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import navSubHeader from "../components/navSubHeader";
import { writeFile } from "../utils/file";

export default {
  components: {
    navSubHeader,
  },
  data() {
    return {
      form: {
        key: "",
        value: "",
      },
      oldForm: {
        key: "",
        value: "",
      },
    };
  },
  methods: {
    fetchData() {
      if (this.$route.params && Object.keys(this.$route.params).length) {
        this.form.key = this.$route.params.key;
        this.form.value = this.$route.params.value;
        this.oldForm.key = this.$route.params.key;
        this.oldForm.value = this.$route.params.value;
      }
    },
    initData() {
      this.form = {
        key: "",
        value: "",
      };
    },
    handleClose() {
      this.$router.back();
      setTimeout(() => {
        this.initData();
      }, 300);
    },
    handleSubmit() {
      const dataIndex = this.$store.state.lists.findIndex(
        (item) => item.key === this.form.key
      );
      if (dataIndex !== -1) {
        this.$notify({
          title: "提示",
          message: "key重复",
          position: "bottom-left",
        });
        return;
      }

      let status = "新增";
      if (this.$route.params && Object.keys(this.$route.params).length) {
        // 修改
        status = "修改";
        this.$store.commit("updateSimpleLists", {
          ...this.form,
          oldKey: this.oldForm.key,
        });
        writeFile("./seeds", this.$store.state.lists);
      } else {
        // 新增
        this.$store.commit("addLists", {
          ...this.form,
          oldKey: this.oldForm.key,
        });
        writeFile("./seeds", this.$store.state.lists);
      }

      this.$notify({
        title: "提示",
        message: `${status}成功`,
        position: "bottom-left",
      });

      setTimeout(() => {
        this.$router.back();
      }, 300);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.home-input {
  width: 376px;
  height: 30px;
  border: 1px white;
  border-radius: 4px;
  background: hsla(0, 0%, 100%, 0.35);
  backdrop-filter: blur(20px);
  padding: 6px 12px;
  margin-bottom: 24px;
}

.home-input:active {
  border: 1px white;
}

.home-input:focus {
  outline: none;
}

.option-container {
  display: flex;
  flex-direction: column;
}

.option-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.option-form {
  margin-top: 120px;
}

.option-btn-group {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.option-btn {
  padding: 0 24px;
  border-radius: 4px;
  margin-left: 12px;
  cursor: pointer;
  color: #606266;
}

.option-btn:hover {
  background: hsla(0, 0%, 100%, 0.55);
}
</style>
