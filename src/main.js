import Vue from "vue";
import App from "./App.vue";
import Vuemerang from "vuemerang";
import * as eva from "eva-icons";
import "vuemerang/dist/vuemerang.css"; //Vuemerang styles
Vue.use(Vuemerang);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
