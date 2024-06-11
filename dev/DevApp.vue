<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import VueDevice from '../src/components/VueDevice/VueDevice.vue';
import { deviceOptions, type DeviceType } from '../src/components/VueDevice/DeviceOptions';
import MMSMessage from './components/MMSMessage.vue';

const devices = Object.keys(deviceOptions) as DeviceType[];

const selectedDevice = ref<DeviceType>('iphone-x');
const orientation = ref<'portrait' | 'landscape'>('portrait');
const showBtns = ref(true);
const showHome = ref(true);
const showSensors = ref(true);
const showStripe = ref(true);
const showPower = ref(true);
const showHeader = ref(true);

const showBtnsOption = ref(true);
const showHomeOption = ref(true);
const showSensorsOption = ref(true);
const showStripeOption = ref(true);
const showPowerOption = ref(true);
const showHeaderOption = ref(true);

const deviceConfig = computed(() => deviceOptions[selectedDevice.value]);

watch(selectedDevice, (newValue: DeviceType) => {
    const options = deviceOptions[newValue];
    if (options) {
        showBtnsOption.value = options.options.includes('showBtns');
        showHomeOption.value = options.options.includes('showHome');
        showSensorsOption.value = options.options.includes('showSensors');
        showStripeOption.value = options.options.includes('showStripe');
        showPowerOption.value = options.options.includes('showPower');
        showHeaderOption.value = options.options.includes('showHeader');
    }
});

</script>

<template>
    <div class="bg-background h-full w-full">
        <div class="grid grid-cols-2 items-center max-w-screen-2xl mx-auto h-screen">
            <header class="m-5">
                <div class="bg-primary text-white p-5 rounded-xl flex flex-col gap-5">
                    <div>
                        <h1 class="text-4xl">Hello there!</h1>
                        <h3 class="mt-5 pl-4">
                            <span>vue-devices</span> is a Vue.js component library for displaying various device frames
                            using the <a href="https://devicescss.xyz/" target="_blank" rel="noopener"
                                class="text-blue-400 hover:underline">DEVICES.CSS</a> library.
                            Ideal for showcasing responsive designs within different device mockups.
                        </h3>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h2 class="text-lg">Available devices</h2>
                        <div class="relative h-10 w-72 min-w-[200px] pl-4">
                            <select v-model="selectedDevice"
                                class="h-full w-full rounded-[7px] border border-gray-500 bg-primary px-3 py-2.5 font-sans text-sm font-normal outline-none transition-all focus:border-blue-500">
                                <option v-for="device in devices" :key="device" :value="device">{{ device }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h2 class="text-lg">Orientation</h2>
                        <div class="flex gap-3 pl-4">
                            <label class="flex items-center"><input type="radio" v-model="orientation" value="portrait"
                                    class="mr-2" /> Portrait</label>
                            <label class="flex items-center"><input type="radio" v-model="orientation" value="landscape"
                                    class="mr-2" /> Landscape</label>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h2 class="text-lg">Options</h2>
                        <div class="grid grid-cols-3 gap-3 pl-4">
                            <label v-if="showBtnsOption" class="flex items-center"><input type="checkbox"
                                    v-model="showBtns" class="mr-2" />
                                Buttons</label>
                            <label v-if="showHomeOption" class="flex items-center"><input type="checkbox"
                                    v-model="showHome" class="mr-2" />
                                Home</label>
                            <label v-if="showSensorsOption" class="flex items-center"><input type="checkbox"
                                    v-model="showSensors" class="mr-2" />
                                Sensors</label>
                            <label v-if="showStripeOption" class="flex items-center"><input type="checkbox"
                                    v-model="showStripe" class="mr-2" />
                                Stripe</label>
                            <label v-if="showPowerOption" class="flex items-center"><input type="checkbox"
                                    v-model="showPower" class="mr-2" />
                                Power</label>
                            <label v-if="showHeaderOption" class="flex items-center"><input type="checkbox"
                                    v-model="showHeader" class="mr-2" />
                                Header</label>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <VueDevice :device="selectedDevice" :orientation="orientation"
                    :showStripe="showStripeOption && showStripe" :showHeader="showHeaderOption && showHeader"
                    :showSensors="showSensorsOption && showSensors" :showBtns="showBtnsOption && showBtns"
                    :showPower="showPowerOption && showPower" :showHome="showHomeOption && showHome" class="bg-white">
                    <MMSMessage device="iphone" direction="RECEIVING" message="Did you know about vue-devices? 😻" />
                    <MMSMessage device="iphone" direction="SENDING" message="No, what is it? 🤔" />
                    <MMSMessage device="iphone" direction="RECEIVING"
                        message="It's just a wrapper component for devices.css created to work with Vue 3. Nothing more, nothing less. 🤷‍♂️" />
                    <MMSMessage device="iphone" direction="SENDING"
                        message="That's pretty cool. Perfect if I need to display a phone or something on my Vue website. 🔥" />
                    <MMSMessage device="iphone" direction="RECEIVING"
                        message="Absolutely dude! It should be pretty painless to install and use. You just install it, import the VueDevice component, and you're good to go. 🤩" />
                    <MMSMessage device="iphone" direction="SENDING" message="Thanks! ❤️" />
                </VueDevice>
            </main>
        </div>
    </div>
</template>
