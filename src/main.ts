import { App } from 'vue'
import VueDevice from './components/VueDevice.vue'

const install = (app: App): void => {
  app.component('VueDevice', VueDevice)
}

export { install, VueDevice }

export default {
  install
}
