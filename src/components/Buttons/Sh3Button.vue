<template>
  <div class="card flex justify-center">
    <Button :label="label" :ptOptions="{ mergeProps: true }" v-bind="$attrs" />
  </div>
</template>

<script lang="ts" setup>
import Button from "primevue/button";

defineOptions({
  inheritAttrs: false,
});

defineProps({
  label: {
    type: String,
    default: "Search",
  },
});
</script>
