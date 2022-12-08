import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";

import "./assets/main.css";

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(vue3GoogleLogin, {
  clientId:
    "151540729439-rmf870bka7igg5bceo3abimssoqsprpu.apps.googleusercontent.com",
});

app.use(pinia);
app.use(router);

app.mount("#app");
