import Vue from "vue";
import axios from "axios";

import App from "./App";
import router from "./router";
import store from "./store";

import "normalize.css/normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import db from "./datastore";

import VueClipboard from "vue-clipboard2";

Vue.use(ElementUI);
Vue.prototype.$db = db;

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>"
}).$mount("#app");
