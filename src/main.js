import '@/assets/main.css';

import { addIcons, OhVueIcon } from "oh-vue-icons";
import { BiArrowLeftShort, BiArrowRightShort } from "oh-vue-icons/icons";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

addIcons(BiArrowRightShort, BiArrowLeftShort);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(router);

app.mount('#app');
