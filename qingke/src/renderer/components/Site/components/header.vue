<template>
  <div class="site-header">
    <div class="site-header-left">
      <el-image class="site-header-img" :src="siteInfo.site_logo">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
    </div>
    <div class="site-header-right">
      <div class="site-header-right__item">
        <div class="site-header-title">
          {{ siteInfo.site_name }}
        </div>
      </div>
      <div class="site-header-right__item">
        <div class="site-header-content">
          {{ siteInfo.site_url }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHeader",
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
  }
};
</script>

<style lang="scss" scoped>
.site-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  border: none;
  border-bottom: 1px solid #dcdfe6;
}

.site-header-left {
  display: flex;
  justify-content: center;
  align-items: center;

  .site-header-img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }
}

.site-header-right {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 400;

  .site-header-right__item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
  }

  .site-header-title {
    font-size: 25px;
    font-weight: bold;
  }
}
</style>
