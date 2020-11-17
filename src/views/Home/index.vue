<template>
  <div class="home">
    <div v-for="item in 10" :key="item">{{ item }}<br /></div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
