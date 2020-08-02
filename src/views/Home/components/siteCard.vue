<template>
  <div>
    <el-card shadow="hover" class="class-card">
      <div @click="jumpTo(siteInfo.id)">
        <el-row>
          <el-col :span="8">
            <div class="class-left">
              <el-image class="class-img" :src="siteInfo.site_logo">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline" />
                </div>
              </el-image>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="class-right">
              <div class="class-right__item">
                <div class="class-title">{{ siteInfo.site_name }}</div>
              </div>
              <div class="class-right__item hidden-sm-only">
                <div class="class-content">{{ siteInfo.site_url }}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";

export default {
  name: "siteCard",
  props: {
    siteInfo: {
      type: Object,
      default: function () {
        return {
          id: 1,
          site_logo: "http://localhost:8000/test.jpg",
          site_name: "Github",
          site_url: "https://github.com",
        };
      },
    },
  },
  methods: {
    jumpTo(id) {
      this.$router.push(`/info/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.class-card {
  background: linear-gradient(to right, #f2f6fc, #dfe8f5);
}

.class-left {
  display: flex;
  justify-content: center;
  align-items: center;

  .class-img {
    border-radius: 50%;
    max-height: 80px;
    max-width: 80px;
    min-height: 60px;
    min-width: 60px;
  }
}

.class-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;

  .class-right__item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
  }

  .class-title {
    font-weight: bold;
  }
}
</style>
