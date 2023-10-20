import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import axios from "axios"
import util from "@/util/util.js"
import router from "./router";
import store from "./store"
const app = createApp(App);
app.config.globalProperties.$util = util
app.config.globalProperties.$axios = axios
app.use(router);
app.use(store);
app.mount('#app');
