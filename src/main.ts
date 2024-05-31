import { App } from 'vue';
import VueDevice from './components/VueDevice.vue';

export default {
  install(app: App) {
    app.component('VueDevice', VueDevice);
  },
};

export { VueDevice };
