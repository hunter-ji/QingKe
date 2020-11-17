<template>
  <section class="app-main">
    <transition name="fade-transform">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
/* fade-transform */
.fade-transform-leave-active {
  transition: all 0.1s;
  display: none;
}

.fade-transform-enter-active {
  transition: all 0.8s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
