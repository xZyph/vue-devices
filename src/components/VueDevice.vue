<template>
  <div class="device-container">
    <div
      :class="['device', `device-${device}`, { 'device-portrait': orientation === 'portrait', 'device-landscape': orientation === 'landscape' }]">
      <div class="device-frame">
        <div class="device-screen">
          <slot></slot>
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

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

withDefaults(defineProps<{
  device?: 'iphone-14'
  | 'google-pixel-6-pro'
  | 'iphone-x'
  | 'macbook-pro'
  | 'ipad'
  | 'surface-pro'
  | 'galaxy-s8'
  | 'nexus-4'
  | 'nexus-5'
  | 'nexus-6'
  | 'ipad-pro-12-9'
  | 'ipad-pro-10-5'
  | 'ipad-pro-9-7',
  orientation?: 'portrait' | 'landscape',
  color?: string,
  showStripe?: boolean,
  showHeader?: boolean,
  showSensors?: boolean,
  showBtns?: boolean,
  showPower?: boolean,
  showHome?: boolean,
}>(), {
  device: 'iphone-14',
  orientation: 'portrait',
  showStripe: true,
  showHeader: true,
  showSensors: true,
  showBtns: true,
  showPower: true,
  showHome: true,
})
</script>

<style scoped>
@import 'devices.css/dist/devices.min.css';

.device-container {
  display: flex;
  justify-content: center;
}

.device-screen {
  background: #fff !important;
  padding-top: 25px;
  padding-bottom: 25px;
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
