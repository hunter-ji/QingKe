<template>
  <div class="container">
    <div class="home-header">
      <el-button type="primary" icon="el-icon-plus" @click="insertData"
        >添加</el-button
      >
      <el-input v-model="search" placeholder="搜索" style="width: 500px;">
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
    </div>

    <!--内容-->
    <div class="home-content">
      <site-card
        class="home-card"
        v-for="(item, index) in handleData"
        :key="index"
        :site-info="item"
      />
    </div>
    <!--内容 结束-->

    <!-- 分页 -->
    <div v-show="!search && handleData.length" class="home-pageination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagesize"
        :total="site_lists.length"
        @current-change="changeCurrent"
      />
    </div>
    <!-- 分页 结束 -->
  </div>
</template>

<script>
import siteCard from "./components/siteCard";

export default {
  name: "Home",
  components: {
    siteCard
  },
  data() {
    return {
      search: "",
      site_lists: [],
      pagesize: 12,
      currentPage: 1
    };
  },
  methods: {
    fetchData() {
      this.site_lists = this.$db.get("site_lists").value();
    },
    changeCurrent(current) {
      this.currentPage = current;
    },
    insertData() {
      for (let i = 0; i < 30; i++) {
        this.$db
          .get("site_lists")
          .insert({
            site_logo: "http://localhost:8080/test.jpg",
            site_name: "Github" + i,
            site_url: "https://github.com"
          })
          .write();
      }
    }
  },
  computed: {
    handleData() {
      const search = this.search;
      if (search) {
        return this.site_lists.filter(data => {
          return Object.keys(data).some(key => {
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.site_lists.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
}

.home-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .home-card {
    width: 30%;
    margin-bottom: 30px;
    cursor: pointer;
  }
}

.home-pageination {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
</style>
