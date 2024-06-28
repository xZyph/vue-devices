<script lang="ts" setup>
import { computed, withDefaults } from 'vue';
import { deviceOptions, type DeviceType } from './DeviceOptions.ts';

defineOptions({
  inheritAttrs: false
})


const props = withDefaults(defineProps<{
  device?: DeviceType,
  color?: string,
  showStripe?: boolean,
  showHeader?: boolean,
  showSensors?: boolean,
  showBtns?: boolean,
  showPower?: boolean,
  showHome?: boolean,
}>(), {
  device: 'iphone-14-pro',
  showStripe: true,
  showHeader: true,
  showSensors: true,
  showBtns: true,
  showPower: true,
  showHome: true,
})

const currentDeviceOptions = computed(() => deviceOptions[props.device]);

if (!currentDeviceOptions.value) {
  console.warn(`Invalid device type "${props.device}". Falling back to default device.`);
}
</script>

<template>
  <div class="device-container">
    <div :class="['device', `device-${device}`, `device-${color}`]">
      <div class="device-frame">
        <div class="device-screen">
          <div class="device-screen-inner" v-bind="$attrs">
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
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.device-screen-inner {
  width: 100%;
  height: 100%;
  overflow: auto;
}

/* Hide scrollbar for Chrome, Safari, and Opera */
.device-screen-inner::-webkit-scrollbar {
  display: none;
}

.device-screen-inner {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.device-content {
  padding: 20px;
}
</style>
