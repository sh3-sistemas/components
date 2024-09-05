<template>
  <ConfirmDialog :draggable="false" group="deletion" v-bind="$attrs">
    <template #container="containerSlotProps">
      <RequiredConfirmation
        v-bind="{
          ...containerSlotProps,
          ...deletionBaseActions,
        }"
      />
    </template>
  </ConfirmDialog>

  <ConfirmDialog :draggable="false" group="return" v-bind="$attrs">
    <template #container="containerSlotProps">
      <RequiredConfirmation
        v-bind="{
          ...containerSlotProps,
          ...returnBaseActions,
        }"
      />
    </template>
  </ConfirmDialog>

  <ConfirmDialog :draggable="false" group="confirmation" v-bind="$attrs">
    <template #container="containerSlotProps">
      <RequiredConfirmation
        v-bind="{
          ...containerSlotProps,
          ...confirmationBaseActions,
        }"
      />
    </template>
  </ConfirmDialog>
</template>

<script setup lang="ts">
import ConfirmDialog from "primevue/confirmdialog";
import RequiredConfirmation from "./templates/RequiredConfirmation.vue";
import {
  deletionBaseActions,
  returnBaseActions,
  confirmationBaseActions,
} from "./utils";

defineOptions({
  inheritAttrs: false,
});
</script>
