<template>
  <el-dialog :visible.sync="localDialog" @close="handleClose">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="分组名">
        <input class="normal-bg home-input" v-model="form.category" />
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
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        category: "",
      },
      localDialog: this.dialog,
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
      setTimeout(() => {
        this.form.category = "";
      }, 300);
    },
    handleSubmit() {
      this.handleClose();
    },
  },
  watch: {
    dialog() {
      this.localDialog = this.dialog;
    },
  },
};
</script>

<style scoped></style>
