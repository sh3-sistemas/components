<template>
  <div class="card flex justify-content-center">
    <Breadcrumb v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb';

defineOptions({
  inheritAttrs: false,
});
</script>
