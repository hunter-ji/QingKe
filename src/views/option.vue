<template>
  <div class="option-container">
    <nav-sub-header />
    <div class="option-content">
      <el-form ref="form" :model="form" label-width="80px" class="option-form">
        <el-form-item label="站点">
          <input
            class="normal-bg home-input"
            v-model="form.key"
            maxlength="40"
          />
        </el-form-item>
        <el-form-item label="账号">
          <input
            class="normal-bg home-input"
            v-model="form.username"
            maxlength="40"
          />
        </el-form-item>
        <el-form-item label="密码">
          <input
            class="normal-bg home-input"
            v-model="form.value"
            maxlength="50"
          />
        </el-form-item>
        <el-form-item label="分组">
          <select
            v-model="form.category"
            class="normal-bg home-input home-select"
          >
            <option value="">无分组</option>
            <option value="个人">个人</option>
            <option value="工作">工作</option>
            <option value="其他">其他</option>
          </select>
        </el-form-item>
        <el-form-item>
          <div class="option-btn-group">
            <div
              class="normal-bg option-btn option-cancel-btn"
              @click="handleGenPass"
            >
              生成随机密码
            </div>
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
import { saveLists } from "../utils/dbStore";
import { randomPassword } from "../utils/randomPass";

export default {
  components: {
    navSubHeader,
  },
  data() {
    return {
      form: {
        key: "",
        value: "",
        username: "",
        category: "",
      },
      oldForm: {
        key: "",
        value: "",
        username: "",
        category: "",
      },
    };
  },
  methods: {
    fetchData() {
      if (this.$route.params && Object.keys(this.$route.params).length) {
        this.form.key = this.$route.params.key;
        this.form.value = this.$route.params.value;
        this.form.username = this.$route.params.username;
        this.form.category = this.$route.params.category;
        this.oldForm.key = this.$route.params.key;
        this.oldForm.value = this.$route.params.value;
        this.oldForm.username = this.$route.params.username;
        this.oldForm.category = this.$route.params.category;
      }
    },
    initData() {
      this.form = {
        key: "",
        value: "",
        username: "",
        category: "",
      };
    },
    handleGenPass() {
      this.form.value = randomPassword(20);
    },
    handleClose() {
      this.$router.back();
      setTimeout(() => {
        this.initData();
      }, 300);
    },
    handleSubmit() {
      if (!this.form.key || !this.form.value) {
        this.$notify({
          title: "提示",
          message: "站点和密码不可为空",
          position: "bottom-left",
        });
        return;
      }

      const dataIndex = this.$store.state.lists.findIndex(
        (item) => item.key === this.form.key
      );
      if (dataIndex !== -1 && this.form.key !== this.oldForm.key) {
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
      } else {
        // 新增
        this.$store.commit("addLists", {
          ...this.form,
          oldKey: this.oldForm.key,
        });
      }

      saveLists(this.$store.state.lists);

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

<style>
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

.home-select {
  width: 400px;
  height: 42px;
  padding-right: 6px;
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
  margin-top: 80px;
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
  cursor: default;
  color: #606266;
}

.option-btn:hover {
  background: hsla(0, 0%, 100%, 0.55);
}
</style>
