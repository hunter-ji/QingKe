<template>
  <div class="home-container">
    <nav_header />

    <div class="home-layout">
      <!--左侧分组-->
      <left-nav @switchMenu="switchMenu" />

      <!--内容-->
      <div class="home-content" v-if="handleData.length">
        <input
          class="normal-bg home-search"
          v-model="search"
          placeholder="搜索..."
        />
        <div class="home-card-list">
          <card v-for="(item, index) in handleData" :key="index" :info="item" />
        </div>
      </div>
      <div v-else class="home-empty">
        <i class="el-icon-milk-tea" />
        <div>空空如也～～继续喝奶茶～～</div>
      </div>
    </div>
  </div>
</template>

<script>
import nav_header from "../components/navHeader";
import leftNav from "../components/leftNav";
import card from "./card";
import db from "../utils/dbStore";

export default {
  components: {
    nav_header,
    leftNav,
    card,
  },
  data() {
    return {
      search: "",
      lists: [],
    };
  },
  methods: {
    fetchData() {
      // this.lists = this.$store.state.lists;
      const lists = db.get("sites").value();
      this.$store.commit("updateLists", lists);
      this.lists = this.$store.state.lists;
      this.switchMenu(this.$store.state.menuActive);
    },
    switchMenu(menu) {
      if (menu === "全部") {
        this.lists = this.$store.state.lists;
      } else {
        this.lists = this.$store.state.lists.filter((item) => {
          return item.category === this.$store.state.menuActive;
        });
      }
    },
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    handleData() {
      const search = this.search;
      if (search) {
        return this.lists.filter((data) => {
          return Object.keys(data).some((key) => {
            return String(data[key]).toLowerCase().indexOf(search) > -1;
          });
        });
      }
      return this.lists;
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
}

.home-layout {
  width: 100%;
  height: 560px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.home-content {
  padding: 24px 0 24px 80px;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  justify-content: flex-start;
  overflow-y: auto;
  width: 700px;
}

.home-search {
  width: 500px;
  height: 30px;
  border: 1px white;
  border-radius: 4px;
  background: hsla(0, 0%, 100%, 0.35);
  backdrop-filter: blur(20px);
  padding: 6px 12px;
  margin-bottom: 24px;
}

.home-search:active {
  border: 1px white;
}

.home-search:focus {
  outline: none;
}

.home-card-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 400px;
  width: 100%;
}

.home-card-list::-webkit-scrollbar {
  width: 12px;
}

.home-card-list::-webkit-scrollbar-track {
  background: hsla(0, 0%, 100%, 0.35);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}

.home-card-list::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 100%, 0.35);
  border-radius: 12px;
}

input::-webkit-input-placeholder {
  color: #c0c4cc;
}

.home-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #606266;
}

.home-empty i {
  font-size: 46px;
}

.home-empty div {
  font-size: 20px;
  margin-top: 30px;
}
</style>
