import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "首页",
      component: require("@/components/Home/index").default
    },
    {
      path: "/class",
      name: "分类",
      component: require("@/components/Classification/index").default
    },
    {
      path: "/info",
      name: "详情",
      component: require("@/components/Site/index").default
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
