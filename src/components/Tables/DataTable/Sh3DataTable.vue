<template>
  <DataTable v-model:filters="filters" :value="items">
    <template #empty>
      <!-- TODO: Create a pretty component to the empty response of the table -->
      {{ empty }}
    </template>
    <Column
      v-if="selectionMode"
      :selection-mode="selectionMode"
      headerStyle="width: 3rem"
      filterHeaderStyle="background-color: white"
      :pt="{
        rowRadioButton: 'bg-red-500 text-red-600',
      }"
    >
    </Column>
    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      filterHeaderStyle="background-color: white"
      reorderableColumn
      v-bind="{ ...col.props }"
    >
      <template #body="slotProps" v-if="col.type == 'tag'">
        <Tag
          :value="slotProps.data[col.field]"
          v-bind="col.props.tag ? col.props.tag(slotProps.data) : {}"
        />
      </template>

      <template #filter="{ filterModel, filterCallback }" v-if="col.filter">
        <component
          :is="filterComponents[col.filter.type]"
          v-model="filterModel.value"
          :filterCallback="filterCallback"
          :col="col"
        />
      </template>
    </Column>

    <Column frozen header="Ações" v-if="actions.length > 0" :exportable="false">
      <template #body="slotProps">
        <div class="actions-wrapper">
          <Button
            v-for="{ icon, color, action, disabled } of actions.filter(
              (action) => action.permission(slotProps.data),
            )"
            :disabled="disabled(slotProps.data)"
            @click="action(slotProps.data)"
            :key="icon"
          >
            <Icon :icon="icon" :class="twMerge('w-5 h-auto text-sm', color)" />
          </Button>
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Button from "primevue/button";
import Column, { type ColumnProps } from "primevue/column";
import Tag, { type TagProps } from "primevue/tag";
import { Icon } from "@iconify/vue";
import { markRaw, useAttrs, type PropType } from "vue";
import { twMerge } from "tailwind-merge";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useFilterTable } from "../Filters/composables";

import SelectFilterTag from "../Filters/SelectFilterTag.vue";
import TextFilter from "../Filters/TextFilter.vue";
import DateFilter from "../Filters/DateFilter.vue";

const attrs = useAttrs();

const filterComponents = {
  SelectFilterTag: markRaw(SelectFilterTag),
  TextFilter: markRaw(TextFilter),
  DateFilter: markRaw(DateFilter),
};

export type ItemColum = {
  field: string;
  header: string;
  type?: "tag" | "download" | "actions";
  props: ColumnProps & { tag?: (item: any) => TagProps };
  filter?: {
    operator: keyof typeof FilterOperator;
    matchMode: keyof typeof FilterMatchMode;
    type: keyof typeof filterComponents;
    options: any[];
  };
};

type Action = {
  color: string;
  icon: string;
  action: (item: any) => void;
  permission: (item: any) => boolean | true;
  disabled: (item: any) => boolean | false;
};

type SelectionMode = "single" | "multiple" | undefined;

const props = defineProps({
  empty: {
    type: String,
    default: "Nenhum item encontrado.",
  },
  items: {
    type: Array as PropType<Array<any>>,
    default: () => <any[]>[],
  },
  columns: {
    type: Array as PropType<Array<ItemColum>>,
    default: () => <ItemColum[]>[],
  },
  actions: {
    type: Array as PropType<Array<Action>>,
    default: () => <Action[]>[],
  },
  selectionMode: {
    type: String as PropType<SelectionMode>,
    default: null,
  },
});

defineOptions({
  inheritAttrs: true,
});

const { filters } = useFilterTable(attrs.filterDisplay, props.columns);
</script>
