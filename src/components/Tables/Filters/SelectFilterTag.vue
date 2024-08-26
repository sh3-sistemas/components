<template>
  <Dropdown
    v-model="filterModel"
    @change="filterCallback()"
    :options="[...(col.filter ? col.filter.options : [])]"
    placeholder="Selecione um"
    class="p-column-filter"
    optionLabel="name"
    optionValue="value"
    :showClear="true"
  >
    <template #option="slotProps">
      <Tag
        :value="slotProps.option.name"
        v-bind="slotProps.option"
        :ptOptions="{ mergeProps: true }"
      />
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import type { ColumnFilterModelType } from "primevue/column";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";

import type { ItemColum } from "../DataTable/Sh3DataTable.vue";
import type { PropType } from "vue";

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

const filterModel = defineModel<ColumnFilterModelType>();
</script>
