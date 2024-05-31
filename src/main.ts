import { App } from 'vue'
import VueDevice from './components/VueDevice.vue'
import 'devices.css/dist/devices.min.css'

const install = (app: App): void => {
  app.component('VueDevice', VueDevice)
}

export { install, VueDevice }

export default {
  install
}
