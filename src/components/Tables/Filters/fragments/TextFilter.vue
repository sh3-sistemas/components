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

import type { Nullable } from "primevue/ts-helpers";
import type { FilterProps } from "./types";

withDefaults(defineProps<FilterProps>(), {
  col: () => ({
    field: "",
    header: "",
  }),
  filterCallback: () => {},
});

const filterModel = defineModel<Nullable<string>>();
</script>
