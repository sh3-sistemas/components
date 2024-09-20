<template>
  <div class="panel-button">
    <Sh3IconButton @click="toggle" v-bind="buttonProps">
      <slot name="button"></slot>
    </Sh3IconButton>

    <OverlayPanel ref="op" v-bind="panelProps">
      <!-- demonstrate Vue 3 dynamic slot/template pass through -->
      <!--  <template
        v-for="(slot, index) of slotNamesOverlay"
        :key="index"
        #[slot]="slotProps"
      >
        <slot :name="slot" v-bind="{ ...(slotProps as object) }" />
      </template> -->
      <template #container="slotProps"
        ><slot name="container" v-bind="{ ...slotProps }"></slot
      ></template>
    </OverlayPanel>
  </div>
</template>
<script setup lang="ts">
import type { Sh3PanelButtonProps } from "@/types";
import Sh3IconButton from "./Sh3IconButton.vue";
/* import type { OverlayPanelSlots } from "primevue/overlaypanel"; */
import OverlayPanel from "primevue/overlaypanel";
import { ref } from "vue";
const op = ref();
const toggle = (event: any) => {
  op.value.toggle(event);
};

/* const slots = useSlots(); */
// Assert type here to prevent errors in template
/* const slotNamesOverlay = Object.keys(
  slots
) as (keyof OverlayPanelSlots)[] as unknown; */

defineProps<Sh3PanelButtonProps>();
</script>
