import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import YmapPlugin from 'vue-yandex-maps'
import './registerServiceWorker'

Vue.use(YmapPlugin, settings)
Vue.config.productionTip = false;
const settings = {
  apiKey: "",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1",
};
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
