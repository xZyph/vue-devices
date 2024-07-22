<script lang="ts" setup>
withDefaults(
  defineProps<{
    device: string
    sender?: string
    direction?: 'SENDING' | 'RECEIVING'
    timestamp?: string
    message?: string
    image?: string
    imageBelow?: boolean
  }>(),
  {
    direction: 'RECEIVING',
    imageBelow: false,
    timestamp: () => {
      const hours = Math.floor(Math.random() * 24)
      const minutes = Math.floor(Math.random() * 60)
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    }
  }
)
</script>

<template>
  <div :class="[
    'message-application',
    device === 'android' ? 'message-application--android' : 'message-application--iphone'
  ]">
    <div class="message-application__header">
      <span class="message-application__header-sender" :class="{ sending: direction === 'SENDING' }">{{ sender }}</span>
      <span class="message-application__header-timestamp">{{ timestamp }}</span>
    </div>
    <div class="message-application__content">
      <div v-if="image && !imageBelow" class="message-application__bubble message-application__bubble--image">
        <img :src="image" alt="MMS image" class="message-application__image" />
      </div>

      <div v-if="message" :class="[
        'message-application__bubble',
        'message-application__bubble--text',
        direction === 'SENDING'
          ? 'message-application__bubble--sent'
          : 'message-application__bubble--received'
      ]">
        <p class="message-application__message-text">{{ message }}</p>
      </div>

      <div v-if="image && imageBelow" class="message-application__bubble message-application__bubble--image">
        <img :src="image" alt="MMS image" class="message-application__image" />
      </div>

      <div v-if="device === 'android'" class="message-application__android-metadata">
        MMS {{ timestamp }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=San+Francisco:wght@300;400;600&display=swap';

.message-application {
  padding: 10px;

  &--android {
    font-family: Roboto, sans-serif;
  }

  &--iphone {
    font-family: 'San Francisco', sans-serif;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    &-sender {
      font-weight: 500;
      font-size: 14px;
      color: #1c1c1e;

      &.sending {
        text-align: end;
      }

      .message-application--iphone & {
        font-weight: 600;
        font-size: 15px;
      }
    }

    &-timestamp {
      color: #999;
      font-size: 12px;

      .message-application--iphone & {
        color: #888;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__bubble {
    background-color: #f1f0f0;
    border-radius: 16px;
    border: 1px solid #d1d1d6;
    display: flex;
    flex-direction: column;
    max-width: 70%;

    &--text {
      padding: 12px;
    }

    &--image {
      overflow: hidden;
    }

    &--sent {
      background-color: #34b7f1;
      color: #fff;
      align-self: flex-end;

      .message-application--iphone & {
        background-color: #007aff;
      }
    }

    &--received {
      background-color: #f1f0f0;
      color: #1c1c1e;
      align-self: flex-start;

      .message-application--iphone & {
        background-color: #e5e5ea;
      }
    }

    .message-application--android &--image {
      padding: 0;
    }
  }

  &__message-text {
    font-size: 16px;
    font-weight: 400;
    color: inherit;
    margin: 0;
    white-space: pre-wrap;

    .message-application--iphone & {
      font-size: 17px;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;

    .message-application--iphone & {
      border-radius: 10px;
    }

    .message-application--android & {
      border-radius: 0;
    }
  }

  &__android-metadata {
    color: #8e8e93;
    text-align: right;
    font-size: 12px;
  }
}
</style>
