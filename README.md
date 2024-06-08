# vue-devices

A Vue.js component library for displaying various device frames using the `devices.css` library. Ideal for showcasing responsive designs within different device mockups.

## Installation

To install the package, run:

```sh
npm install vue-devices
```

## Usage
First, import and register the VueDevice component in your Vue application. You can do this globally in your main file or locally in individual components.

### Global Registration
```js
// main.js or main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VueDevices from 'vue-devices'

const app = createApp(App)

app.use(VueDevices)
app.mount('#app')
```

### Local Registration
```vue
<template>
  <VueDevice type="iphone-x" />
</template>

<script setup>
import { VueDevice } from 'vue-devices'
</script>
```


## Component Props

### VueDevice

| Prop           | Type                                                                                                    | Default      | Description                                                         |
|----------------|---------------------------------------------------------------------------------------------------------|--------------|---------------------------------------------------------------------|
| device         | 'apple-watch-s8' \| 'apple-watch-ultra' \| 'galaxy-s8' \| 'google-pixel-2-xl' \| 'google-pixel-6-pro' \| 'google-pixel' \| 'homepod' \| 'imac-pro' \| 'imac' \| 'ipad-pro-2017' \| 'ipad-pro' \| 'iphone-14-pro' \| 'iphone-14' \| 'iphone-8' \| 'iphone-x' \| 'iphone' \| 'macbook-pro-2018' \| 'macbook-pro' \| 'macbook' \| 'pro-display-xdr' \| 'surface-book' \| 'surface-pro-2017' \| 'surface-pro' \| 'surface-studio' | 'iphone-14' | The type of device frame to display.                                 |
| orientation    | 'portrait' \| 'landscape'                                                                               | 'portrait'   | The orientation of the device frame.                                |
| color          | string                                                                                                  |              | The color of the device frame.                                      |
| showStripe     | boolean                                                                                                 | true         | Whether to show the stripe on the device frame.                     |
| showHeader     | boolean                                                                                                 | true         | Whether to show the header on the device frame.                     |
| showSensors    | boolean                                                                                                 | true         | Whether to show the sensors on the device frame.                    |
| showBtns       | boolean                                                                                                 | true         | Whether to show the buttons on the device frame.                    |
| showPower      | boolean                                                                                                 | true         | Whether to show the power button on the device frame.               |
| showHome       | boolean                                                                                                 | true         | Whether to show the home button on the device frame (if applicable).|


## Example 

```vue
<template>
  <div>
    <h1>My Responsive Design</h1>
    <VueDevice type="iphone-x">
      <img src="path-to-your-screenshot.png" alt="App Screenshot" />
    </VueDevice>
  </div>
</template>

<script setup>
import { VueDevice } from 'vue-devices'
</script>
```

## Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Author
Marius Mikelsen - marius.mikelsen@gmail.com

## Links
[Repository](https://github.com/xZyph/vue-devices)

[Issues](https://github.com/xZyph/vue-devices/issues)