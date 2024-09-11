<template>
  <InputText
    v-model="filterModel"
    type="text"
    @input="filterCallback()"
    class="p-column-filter max-w-[135px]"
    placeholder="Pesquisar"
  />
</template>

<script lang="ts" setup>
import InputText from "primevue/inputtext";

import type { ItemColum } from "@/components/Tables/DataTable/Sh3DataTable.vue";
import type { PropType } from "vue";
import type { Nullable } from "primevue/ts-helpers";

defineProps({
  col: {
    type: Object as PropType<ItemColum>,
    default: () => {
      return {
        filter: {
          options: [],
        },
      };
    },
  },
  filterCallback: {
    type: Function,
    default: () => {
      // Implement your filter callback logic here
    },
  },
});

const filterModel = defineModel<Nullable<string>>();
</script>
