<template>
  <div class="home-container">
    <nav_header />

    <div class="home-content">
      <input
        class="normal-bg home-search"
        palceholder="搜索..."
        v-model="search"
      />
      <div class="home-card-list">
        <card v-for="(item, index) in handleData" :key="index" :info="item" />
      </div>
    </div>
  </div>
</template>

<script>
import nav_header from "../components/navHeader";
import card from "./card";
import { writeFile } from "../utils/file";

export default {
  components: {
    nav_header,
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
      this.lists = this.$store.state.lists;
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
    storeLists() {
      console.log("eaaaa");
      writeFile("./seeds", this.$store.state.lists);
      return this.$store.state.lists;
    },
  },
  watch: {
    storeList(newVal) {
      this.lists = newVal;
      // 写入文件
      console.log("bbbbb");
      // writeFile("~/seeds", newVal);
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
}

.home-content {
  padding: 24px 0 24px 100px;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  justify-content: flex-start;
  overflow-y: auto;
}

.home-search {
  width: 600px;
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
</style>
