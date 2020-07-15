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
          <i class="el-icon-document-copy" />
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
  }
}
</style>
