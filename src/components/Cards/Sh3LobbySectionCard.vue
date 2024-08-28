<template>
  <div class="lobby-container flex flex-col gap-2">
    <SectionTitle :title="title" :class="titleStyle" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { SectionTitle } from "../Typography";

defineProps({
  title: {
    type: String,
    default: "",
  },
  titleStyle: {
    type: String,
    default: "",
  },
});
</script>
