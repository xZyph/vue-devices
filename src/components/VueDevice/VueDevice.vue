<script lang="ts" setup>
import { withDefaults } from 'vue';

defineOptions({
  inheritAttrs: false
})

export type DeviceType =
  | "apple-watch-s8"
  | "apple-watch-ultra"
  | "galaxy-s8"
  | "google-pixel-2-xl"
  | "google-pixel-6-pro"
  | "google-pixel"
  | "homepod"
  | "imac-pro"
  | "imac"
  | "ipad-pro-2017"
  | "ipad-pro"
  | "iphone-14-pro"
  | "iphone-14"
  | "iphone-8"
  | "iphone-x"
  | "macbook-pro-2018"
  | "macbook-pro"
  | "macbook"
  | "pro-display-xdr"
  | "surface-book"
  | "surface-pro-2017"
  | "surface-studio";

withDefaults(defineProps<{
  device?: DeviceType,
  orientation?: 'portrait' | 'landscape',
  color?: string,
  showStripe?: boolean,
  showHeader?: boolean,
  showSensors?: boolean,
  showBtns?: boolean,
  showPower?: boolean,
  showHome?: boolean,
}>(), {
  device: 'iphone-14-pro',
  orientation: 'portrait',
  showStripe: false,
  showHeader: false,
  showSensors: false,
  showBtns: false,
  showPower: false,
  showHome: false,
})
</script>

<template>
  <div class="device-container">
    <div :class="['device', `device-${device}`, `device-${orientation}`]">
      <div class="device-frame">
        <div class="device-screen">
          <div v-bind="$attrs">
            <slot></slot>
          </div>
        </div>
      </div>
      <div v-if="showStripe" class="device-stripe"></div>
      <div v-if="showHeader" class="device-header"></div>
      <div v-if="showSensors" class="device-sensors"></div>
      <div v-if="showBtns" class="device-btns"></div>
      <div v-if="showPower" class="device-power"></div>
      <div v-if="showHome" class="device-home"></div>
    </div>
  </div>
</template>

<style scoped>
.device-container {
  display: flex;
  justify-content: center;
}

.device-screen {
  overflow: scroll;

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Hide scrollbar for Chrome, Safari, and Opera */
.device-screen::-webkit-scrollbar {
  display: none;
}

.device-container .device-wrapper {
  position: relative;
}

.device-content {
  padding: 20px;
}
</style>