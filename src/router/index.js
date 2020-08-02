import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: () => {
      import("../views/Home/index");
    },
  },
  {
    path: "/class",
    name: "分类",
    component: () => {
      import("../views/Classification/index");
    },
  },
  {
    path: "/info/:id",
    name: "详情",
    component: () => {
      import("../views/Site/index");
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
