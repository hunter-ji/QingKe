<template>
  <div class="container">
    <el-page-header @back="goBack" content="详情" />

    <!--头部-->
    <my-header />

    <!--详细内容-->
    <div class="site-content__container">
      <my-content class="site-content" v-for="item in 5" :key="item" />
      <el-button
        class="site-btn__add"
        icon="el-icon-plus"
        @click="dialog = true"
      >
        新增
      </el-button>
    </div>

    <!--新增-->
    <panel :dialog="dialog" :status="dialogStatus" @toggle="dialogToggle" />
  </div>
</template>

<script>
import myHeader from "./components/header";
import myContent from "./components/content";
import panel from "./components/panel";

export default {
  name: "Site",
  props: {
    siteInfo: {
      type: Object,
      default: function() {
        return {
          site_id: 1,
          site_logo: "http://localhost:8080/test.jpg",
          site_name: "Github",
          site_url: "https://github.com"
        };
      }
    }
  },
  components: {
    myHeader,
    myContent,
    panel
  },
  data() {
    return {
      dialog: false,
      dialogStatus: true
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    dialogToggle(dialog) {
      this.dialog = dialog;
    }
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
