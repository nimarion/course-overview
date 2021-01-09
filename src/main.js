import Vue from "vue";
import { Image, Field, Input } from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import router from "./router";

Vue.use(Image);
Vue.use(Field);
Vue.use(Input);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
