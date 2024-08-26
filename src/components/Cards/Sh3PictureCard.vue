<template>
  <button
    :title="pictureCard.label"
    @click="pictureCard.onClick(pictureCard.params)"
    :class="
      twMerge(
        'picture-card--container shrink-0 w-40 h-[105px] pt-2 gap-2 flex flex-col items-center justify-between overflow-hidden rounded-xl border border-selenium-400 hover:opacity-80',
        pictureCardStyle.card,
      )
    "
  >
    <div class="picture-card--img-container h-[60%] flex items-center">
      <img
        :src="pictureCard.image"
        :class="twMerge('w-12 h-auto', pictureCardStyle.image)"
      />
    </div>
    <div
      :class="
        twMerge(
          'picture-card--label-container px-4 py-2 w-full bg-selenium-400 rounded-b-xl text-white text-xs whitespace-nowrap truncate',
          pictureCardStyle.label,
        )
      "
    >
      {{ pictureCard.label }}
    </div>
  </button>
</template>

<script setup lang="ts">
import type { PictureCard, PictureCardStyle } from "./constants";
import type { PropType } from "vue";
import { twMerge } from "tailwind-merge";

defineProps({
  pictureCard: {
    type: Object as PropType<PictureCard>,
    default: () => {
      return {
        image: "",
        label: "",
        params: () => {},
        onClick: () => {},
      };
    },
  },
  pictureCardStyle: {
    type: Object as PropType<PictureCardStyle>,
    default: () => {
      return {
        card: "",
        label: "",
        image: "",
      };
    },
  },
});
</script>
