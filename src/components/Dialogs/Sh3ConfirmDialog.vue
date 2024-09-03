<template>
  <ConfirmDialog :draggable="false" group="deletion">
    <template #container="{ message, acceptCallback, rejectCallback }">
      <!-- <div
        class="flex flex-col align-items-center p-5 surface-overlay border-round text-center"
      >
        <div
          class="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem"
        >
          <i class="pi pi-question text-5xl"></i>
        </div>
        <span class="font-bold text-2xl block mb-2 mt-4">{{
          message.header
        }}</span>
        <p class="mb-0 text-contabil-600">{{ message.message }}</p>
        <div class="flex justify-end gap-2 mt-4">
          <Button
            label="Cancel"
            outlined
            severity="secondary"
            @click="rejectCallback"
          ></Button>
          <Button label="Deletar" severity="danger" @click="acceptCallback"></Button>
        </div>
      </div>
    </template> -->
      <RequiredConfirmation
        v-bind="{
          message,
          acceptCallback,
          rejectCallback,
          ...deletionBaseActions,
        }"
      />
    </template>
  </ConfirmDialog>

  <ConfirmDialog :draggable="false" group="confirmation">
    <template #container="{ message, acceptCallback, rejectCallback }">
      <!--       <div
        class="flex flex-col align-items-center p-5 surface-overlay border-round text-center"
      >
        <div
          class="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem"
        >
          <i class="pi pi-question text-5xl"></i>
        </div>
        <span class="font-bold text-2xl block mb-2 mt-4">{{
          message.header
        }}</span>
        <p class="mb-0 text-contabil-600">{{ message.message }}</p>
        <div class="flex justify-end gap-2 mt-4">
          <Button
            label="Cancel"
            outlined
            severity="secondary"
            @click="rejectCallback"
          ></Button>
          <Button label="Save" @click="acceptCallback"></Button>
        </div>
      </div> -->
      <RequiredConfirmation
        v-bind="{
          message,
          acceptCallback,
          rejectCallback,
          ...confirmationBaseActions,
        }"
      />
    </template>
  </ConfirmDialog>
</template>

<script setup lang="ts">
import ConfirmDialog from "primevue/confirmdialog";
import RequiredConfirmation from "./templates/RequiredConfirmation.vue";
import { deletionBaseActions, confirmationBaseActions } from "./utils";
</script>
