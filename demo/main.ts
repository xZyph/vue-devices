import { createApp } from 'vue';
import DemoApp from './DemoApp.vue';
import VueDevices from '../src/main';
import './main.css'

const app = createApp(DemoApp);
app.use(VueDevices);
app.mount('#app');
