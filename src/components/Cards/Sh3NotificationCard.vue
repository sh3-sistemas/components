<template>
  <div
    v-for="(notification, index) in notifications"
    v-bind:key="index"
    class="notification w-full flex flex-row justify-between items-center border-b border-mercury-200 py-2 px-2"
  >
    <div class="notification-text flex flex-col gap-0.5 justify-center">
      <span class="text">
        {{ notification.text }}
      </span>
      <span class="label text-sm text-mercury-500">
        {{ notification.label.time }} | {{ notification.label.autarchy }}
      </span>
    </div>
    <EraCardTag :tagVariation="notification.tag" />
  </div>
</template>

<script setup lang="ts">
type NotificationType = {
  text: string;
  tag: string;
  label: {
    time: string;
    autarchy: string;
  };
};

defineProps({
  notifications: {
    type: Array<NotificationType>,
    default: () => [],
  },
});
</script>
