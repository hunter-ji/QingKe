import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";

import "@/icons";

import { Notification, Form, FormItem, MessageBox } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);
Vue.config.productionTip = false;
Vue.prototype.$notify = Notification;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.use(Form);
Vue.use(FormItem);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
