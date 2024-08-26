<template>
  <div
    :class="
      twMerge(
        'title-container inline-flex text-lg text-mercury-950',
        highlightStyle.main,
      )
    "
  >
    <span class="pr-1"> {{ highlightText.title }} </span>
    <span :class="twMerge('text-selenium-700', highlightStyle.name)">
      {{ highlightText.name }}
    </span>
    <span> {{ highlightText.extra }} </span>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { twMerge } from "tailwind-merge";

type HighlightText = {
  title: string;
  name: string;
  extra: string;
};

type HighlightStyle = {
  main: string;
  name: string;
};

defineProps({
  highlightText: {
    type: Object as PropType<HighlightText>,
    default: () => {
      return {
        title: "Olá,",
        name: "Fernando",
        extra: "!",
      };
    },
  },
  highlightStyle: {
    type: Object as PropType<HighlightStyle>,
    default: () => {
      return {
        main: "",
        name: "",
      };
    },
  },
});
</script>
