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
import type { FilterProps } from "./types";

withDefaults(defineProps<FilterProps>(), {
  col: () => ({
    field: "",
    header: "",
  }),
  filterCallback: () => {},
});

const filterModel = defineModel<ColumnFilterModelType>();
</script>
