import { createApp } from 'vue';
import DevApp from './DevApp.vue';
import VueDevices from '../src/main';
import './main.css'

const app = createApp(DevApp);
app.use(VueDevices);
app.mount('#app');
