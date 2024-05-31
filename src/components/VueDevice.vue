<template>
  <div :class="`device ${type}`">
    <div class="screen">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'devices.css/dist/devices.min.css';

defineProps<{
  type: string;
}>();
</script>

<style scoped>
.device {
  margin: 0 auto;
}

.screen {
  overflow: hidden;
}
</style>
