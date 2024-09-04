<template>
  <ConfirmDialog :draggable="false" group="deletion">
    <template #container="containerSlotProps">
      <RequiredConfirmation
        v-bind="{
          ...containerSlotProps,
          ...deletionBaseActions,
        }"
      />
    </template>
  </ConfirmDialog>

  <ConfirmDialog :draggable="false" group="return">
    <template #container="containerSlotProps">
      <RequiredConfirmation
        v-bind="{
          ...containerSlotProps,
          ...returnBaseActions,
        }"
      />
    </template>
  </ConfirmDialog>
</template>

<script setup lang="ts">
import ConfirmDialog from "primevue/confirmdialog";
import RequiredConfirmation from "./templates/RequiredConfirmation.vue";
import { deletionBaseActions, returnBaseActions } from "./utils";
</script>
