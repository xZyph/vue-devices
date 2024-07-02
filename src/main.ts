import { App } from 'vue';
import VueDevice from './components/VueDevice/VueDevice.vue';
import 'devices.css/dist/devices.min.css';
import { deviceOptions } from './components/VueDevice/DeviceOptions';

const install = (app: App): void => {
  app.component('VueDevice', VueDevice);
};

export { install, VueDevice, deviceOptions };

export default {
  install,
  deviceOptions,
};
