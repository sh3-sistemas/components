<template>
  <div
    :class="
      twMerge(
        'flex px-[30px] py-[30px] pb-5 rounded-[10px] justify-start items-center gap-4',
        cardStyle,
      )
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";

defineProps({
  cardStyle: {
    type: String,
    default: "bg-white",
  },
});
</script>
