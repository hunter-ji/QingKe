<template>
  <div class="container">
    <el-page-header @back="goBack" content="账号详情" />

    <!--头部-->
    <my-header :site-info="siteInfo" />

    <!--详细内容-->
    <div class="site-content__container">
      <span class="nothing" v-if="!site_item.length">
        <i class="el-icon-info" />
        暂无数据
      </span>
      <my-content
        class="site-content"
        v-else
        v-for="(item, index) in site_item"
        :key="index"
        :info="item"
        @delete="contentDelete"
      />
      <el-button
        class="site-btn__add"
        icon="el-icon-plus"
        @click="dialog = true"
      >
        新增
      </el-button>
    </div>

    <!--新增-->
    <panel
      :dialog="dialog"
      :status="dialogStatus"
      @toggle="dialogToggle"
      @submit="dialogSubmit"
    />
  </div>
</template>

<script>
import myHeader from "./components/header";
import myContent from "./components/content";
import panel from "./components/panel";

export default {
  name: "Site",
  components: {
    myHeader,
    myContent,
    panel
  },
  data() {
    return {
      dialog: false,
      dialogStatus: true,
      siteInfo: null,
      site_item: []
    };
  },
  methods: {
    fetchData() {
      // 获取站点信息
      this.siteInfo = this.$db
        .get("site_lists")
        .find({ id: this.$route.params.id })
        .value();
    },
    getSiteItem() {
      // 获取站点下的账户信息
      this.site_item = this.$db
        .get("site_item")
        .filter({
          site_id: this.$route.params.id
        })
        .value();
    },
    goBack() {
      this.$router.push("/");
    },
    dialogToggle(dialog) {
      this.dialog = dialog;
    },
    dialogSubmit() {
      this.getSiteItem();
    },
    contentDelete(id) {
      this.site_item.splice(
        this.site_item.findIndex(item => item.id === id),
        1
      );
    }
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.getSiteItem();
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}

.site-content__container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.site-content {
  margin: 15px 0;
  width: 50%;
  max-width: 800px;
  min-width: 500px;
}

.site-btn__add {
  width: 50%;
  max-width: 800px;
  min-width: 500px;
}
</style>
