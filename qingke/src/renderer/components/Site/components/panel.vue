<template>
  <div>
    <el-dialog
      :title="status ? '新增' : '编辑'"
      :visible.sync="local_dialog"
      @close="cancel"
    >
      <el-form :model="local_info" ref="form" label-width="80px" :rules="rules">
        <el-form-item label="账户" prop="account">
          <el-input v-model="local_info.account" style="width: 95%" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="local_info.password"
            type="password"
            style="width: 95%"
          />
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            v-model="local_info.remark"
            type="textarea"
            style="width: 95%"
            :rows="2"
          />
        </el-form-item>
        <el-form-item>
          <div class="panel-btn-group">
            <el-button type="primary" @click="submit">确定</el-button>
            <el-button @click="cancel">取消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: {
    dialog: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    info: {
      type: Object,
      default: function() {
        return {
          account: null,
          password: null,
          remark: null
        };
      }
    },
    status: {
      type: Boolean,
      default: function() {
        return true;
      }
    }
  },
  data() {
    return {
      local_dialog: this.dialog,
      local_info: this.info,
      rules: {
        account: [
          { required: true, message: "请输入账户", trigger: "blur" },
          { max: 50, message: "长度在 50 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 50, message: "长度在 50 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    cancel() {
      this.local_dialog = false;
      this.$emit("toggle", this.local_dialog);
      setTimeout(() => {
        this.$refs["form"].resetFields();
        this.local_info.remark = null;
      }, 300);
    },
    async handle_data() {
      if (this.status) {
        // 新增
        this.$db
          .get("site_item")
          .insert({
            site_id: this.$route.params.id,
            account: this.local_info.account,
            password: this.local_info.password,
            remark: this.local_info.remark ? this.local_info.remark : ""
          })
          .write();
      } else {
        // 修改
        this.$db
          .get("site_item")
          .find({
            id: this.local_info.id
          })
          .assign({
            site_id: this.$route.params.id,
            account: this.local_info.account,
            password: this.local_info.password,
            remark: this.local_info.remark ? this.local_info.remark : ""
          })
          .write();
      }
    },
    submit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.handle_data()
            .then(() => {
              this.$message({
                message: this.status ? "新增成功" : "编辑成功",
                type: "success"
              });
              this.cancel();
              this.$emit("submit", true);
            })
            .catch(() => {
              this.$message({
                message: "操作失败",
                type: "error"
              });
            });
        } else {
          return false;
        }
      });
    }
  },
  watch: {
    dialog(val) {
      this.local_dialog = val;
    },
    info(val) {
      this.local_info = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-btn-group {
  display: flex;
  justify-content: flex-end;
}
</style>
