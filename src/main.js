import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";

import { Notification, Form, FormItem, MessageBox, Dialog } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import VueClipboard from "vue-clipboard2";

Vue.config.productionTip = false;

Vue.use(VueClipboard);

Vue.prototype.$notify = Notification;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
