<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import VueDevice from '../src/components/VueDevice/VueDevice.vue';
import { deviceOptions, type DeviceType } from '../src/components/VueDevice/DeviceOptions';
import Message from './components/Message.vue';

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

const selectedColor = ref<string>(deviceOptions[selectedDevice.value].colors[0]);

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
        selectedColor.value = options.colors[0];
    }
});

</script>

<template>
    <div class="bg-gradient-to-r from-slate-900 to-slate-700 h-full w-full">
        <div class="grid lg:grid-cols-2 items-center max-w-screen-2xl mx-auto h-screen">
            <header class="m-5">
                <div class="bg-gradient-to-r from-rose-700 to-pink-600 text-white p-12 rounded-xl flex flex-col gap-12">
                    <div>
                        <div class="flex justify-between">
                            <h1 class="text-5xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent font-bold underline tracking-tighter">vue-devices</h1>
                            <span
                                class="text-5xl ml-5 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tighter">v1.2.0</span>
                        </div>
                        
                        <h3 class="mt-12">
                            <span>vue-devices</span> is a Vue.js component library for displaying various device frames
                            using the <a href="https://devicescss.xyz/" target="_blank" rel="noopener"
                                class="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent font-bold underline tracking-tighter">DEVICES.CSS</a> library.
                            Ideal for showcasing responsive designs within different device mockups.
                        </h3>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h2 class="text-lg font-bold">Available devices</h2>
                        <div class="relative h-10 w-full">
                            <select v-model="selectedDevice" id="device"
                                class="block w-full px-4 py-3 text-gray-900 rounded-lg bg-gray-700 placeholder-gray-400 text-white">
                                <option v-for="device in devices" :key="device" :value="device"
                                    :selected="device === selectedDevice">{{ device }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <h2 class="text-lg font-bold">Options</h2>
                        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">

                            <div v-if="showBtnsOption"
                                class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <div class="flex items-center ps-3">
                                    <input id="buttons" type="checkbox" v-model="showBtns"
                                        class="w-4 h-4 text-tertiary bg-gray-100 border-gray-300 rounded focus:ring-tertiary dark:focus:ring-tertiary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="buttons"
                                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Buttons
                                    </label>
                                </div>
                            </div>

                            <div v-if="showHomeOption"
                                class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <div class="flex items-center ps-3">
                                    <input id="home" type="checkbox" v-model="showHome"
                                        class="w-4 h-4 text-tertiary bg-gray-100 border-gray-300 rounded focus:ring-tertiary dark:focus:ring-tertiary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="home"
                                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Home
                                    </label>
                                </div>
                            </div>

                            <div v-if="showSensorsOption"
                                class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <div class="flex items-center ps-3">
                                    <input id="sensors" type="checkbox" v-model="showSensors"
                                        class="w-4 h-4 text-tertiary bg-gray-100 border-gray-300 rounded focus:ring-tertiary dark:focus:ring-tertiary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="sensors"
                                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Sensors
                                    </label>
                                </div>
                            </div>

                            <div v-if="showStripeOption"
                                class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <div class="flex items-center ps-3">
                                    <input id="stripe" type="checkbox" v-model="showStripe"
                                        class="w-4 h-4 text-tertiary bg-gray-100 border-gray-300 rounded focus:ring-tertiary dark:focus:ring-tertiary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="stripe"
                                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Stripe
                                    </label>
                                </div>
                            </div>

                            <div v-if="showPowerOption"
                                class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <div class="flex items-center ps-3">
                                    <input id="power" type="checkbox" v-model="showPower"
                                        class="w-4 h-4 text-tertiary bg-gray-100 border-gray-300 rounded focus:ring-tertiary dark:focus:ring-tertiary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="power"
                                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Power
                                    </label>
                                </div>
                            </div>

                            <div v-if="showHeaderOption"
                                class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <div class="flex items-center ps-3">
                                    <input id="header" type="checkbox" v-model="showHeader"
                                        class="w-4 h-4 text-tertiary bg-gray-100 border-gray-300 rounded focus:ring-tertiary dark:focus:ring-tertiary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="header"
                                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Header
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <h2 class="text-lg font-bold">Available Colors</h2>
                        <div class="flex gap-2">
                            <div v-for="color in deviceConfig.colors" :key="color" :style="{ backgroundColor: color }"
                                class="w-8 h-8 rounded-full cursor-pointer relative border-2"
                                :class="[ selectedColor === color ? 'border-black' : 'border-white']"
                                @click="selectedColor = color">
                                <svg v-if="selectedColor === color" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="w-4 h-4 absolute inset-0 m-auto text-black">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            <main>
                <VueDevice :device="selectedDevice" :orientation="orientation" :color="selectedColor"
                    :showStripe="showStripeOption && showStripe" :showHeader="showHeaderOption && showHeader"
                    :showSensors="showSensorsOption && showSensors" :showBtns="showBtnsOption && showBtns"
                    :showPower="showPowerOption && showPower" :showHome="showHomeOption && showHome" class="bg-white">
                    <Message device="iphone" direction="RECEIVING" message="Did you know about vue-devices? 😻" />
                    <Message device="iphone" direction="SENDING" message="No, what is it? 🤔" />
                    <Message device="iphone" direction="RECEIVING"
                        message="It's just a wrapper component for devices.css created to work with Vue 3. Nothing more, nothing less. 🤷‍♂️" />
                    <Message device="iphone" direction="SENDING"
                        message="That's pretty cool. Perfect if I need to display a phone or something on my Vue website. 🔥" />
                    <Message device="iphone" direction="RECEIVING"
                        message="Absolutely dude! It should be pretty painless to install and use. You just install it, import the VueDevice component, and you're good to go. 🤩" />
                    <Message device="iphone" direction="SENDING" message="Thanks! ❤️" />
                </VueDevice>
            </main>
        </div>
    </div>
</template>
