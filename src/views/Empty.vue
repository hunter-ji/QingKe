<template>
  <div class="home-empty">
    <i :class="randomList[randomNum].value" />
    <div>空空如也～～不如{{ randomList[randomNum].label }}～～</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomList: [
        {
          label: "喝杯奶茶",
          value: "el-icon-milk-tea",
        },
        {
          label: "吃根冰棍儿",
          value: "el-icon-ice-cream-round",
        },
        {
          label: "喝茶",
          value: "el-icon-hot-water",
        },
        {
          label: "恰根棒棒糖",
          value: "el-icon-lollipop",
        },
      ],
      randomNum: 0,
    };
  },
  mounted() {
    this.randomNum = Math.floor(Math.random() * 4);
  },
};
</script>

<style scoped>
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
