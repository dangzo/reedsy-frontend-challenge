import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import TextHighlight from "vue-text-highlight";
import DefaultLayout from "./layouts/Default.vue";

Vue.component("text-highlight", TextHighlight);
Vue.component("default-layout", DefaultLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
