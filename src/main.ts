import { App } from 'vue'
import VueDevice from './components/VueDevice.vue'

const install = (app: App): void => {
  app.component('VueDevice', VueDevice)
}

export default { install, VueDevice }
