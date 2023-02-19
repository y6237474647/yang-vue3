import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { initRouter } from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
// import "vuetify/styles";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
});
const app = createApp(App);
initRouter(app);
app.mount("#app");
app.use(vuetify);
