<template>
  <div>
    <el-card shadow="hover" class="box-card">
      <div class="content-container">
        <div class="content-title">
          {{ info.account | remarkLength(10) }}
        </div>
        <div class="content-tip">
          {{ info.remark | remarkLength(8) }}
        </div>
        <div class="content-tool">
          <i class="el-icon-more-outline" @click="dialog = true" />
          <i class="el-icon-document-copy" @click="clipPass" />
          <i class="el-icon-delete" @click="handleDelete(info.id)" />
        </div>
      </div>
    </el-card>

    <!--新增和编辑拟态框-->
    <panel
      :dialog="dialog"
      :info="info"
      :status="dialogStatus"
      @toggle="dialogToggle"
    />
  </div>
</template>

<script>
import panel from "./panel";

export default {
  name: "Content",
  props: {
    info: {
      type: Object,
      default: function() {
        return {
          account: "tom",
          password: "adminadmin",
          remark: "备注备注备注备注备注备注"
        };
      }
    }
  },
  components: { panel },
  data() {
    return {
      dialog: false,
      dialogStatus: false
    };
  },
  methods: {
    dialogToggle(dialog) {
      this.dialog = dialog;
    },
    handleDelete(id) {
      this.$confirm("此操作将永久删除该账号, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 执行删除
          this.$db
            .get("site_item")
            .remove({ id: id })
            .write();

          this.$emit("delete", id);

          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    clipPass() {
      this.$copyText(this.info.password)
        .then(() => {
          this.$message({
            message: "已复制到粘贴板",
            type: "success"
          });
        })
        .catch(() => {
          this.$message({
            message: "获取密码失败",
            tyep: "error"
          });
        });
    }
  },
  filters: {
    remarkLength(remark, maxLen) {
      if (remark.length > maxLen) {
        return `${remark.slice(0, maxLen)}...`;
      }
      return remark;
    }
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  background: #f2f6fc;
  padding: 12px;
}

.content-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .content-tip {
    color: #909399;
  }

  .content-tool {
    display: flex;
    flex-direction: row;

    i {
      margin-left: 10px;
      display: block;
      cursor: pointer;
    }

    i.el-icon-delete:hover {
      color: #f56c6c;
    }
  }
}
</style>
