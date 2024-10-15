<template>
  <DataTable
    v-bind="props"
    v-model:selection="selected"
    v-model:editingRows="editingRows"
    edit-mode="row"
    :value="items"
    :selectionMode="undefined"
    @update:selection="selectRow"
  >
    <template #empty>{{ emptyString }} </template>
    <Column v-if="selectionMode" :selection-mode="selectionMode" class="w-10" />
    <Column
      v-for="col of columns.filter((x) => x.visible != false)"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable"
      :pt="{ sortBadge: 'hidden' }"
    >
      <template #body="{ data: row, field }">
        {{ row[field] }}
      </template>
      <template v-if="col.editable != false" #editor="{ data: row, field }">
        <InputText v-model="row[field]" :type="col.filterType.toLowerCase()" />
      </template>
    </Column>
    <Column class="w-20">
      <template #body="{ data: row }">
        <Sh3Button
          icon-pos="right"
          :class="buttonClass + ' !flex mx-auto'"
          icon="pi pi-pencil"
          :disabled="editingRows.length > 0"
          @click="newEdit(row)"
        />
      </template>
      <template #editor="{ data: row, index }">
        <Sh3Button
          v-tooltip.top="saveTooltip"
          icon-pos="right"
          :class="buttonClass"
          icon="pi pi-check"
          @click="updateRow(row)"
        />
        <Sh3Button
          v-tooltip.top="cancelTooltip"
          icon-pos="right"
          :class="buttonClass"
          icon="pi pi-times"
          @click="cancelEdit(row, index)"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import type { Sh3DataTableEditableProps } from "./types";

const selected = defineModel<Array<object>>("selection", {
  required: false,
  default: [],
});
const editingRows = defineModel<Array<object>>("editingRows", {
  required: false,
  default: [],
});
const items = defineModel<Array<object>>("items", {
  required: false,
  default: [],
});

const props = withDefaults(defineProps<Sh3DataTableEditableProps>(), {
  emptyString: "Nenhum Registro encontrado",
  dataKey: "id",
});

defineOptions({
  inheritAttrs: false,
});

const buttonClass = "!ring-0 !bg-transparent !text-inherit !shadow-none";

const hideDelay = {
  showDelay: 50,
  hideDelay: 50,
};

const cancelTooltip = {
  value: "Cancelar",
  pt: { text: "bg-slate-300 text-xs rounded-md p-1.5" },
  ...hideDelay,
};

const saveTooltip = {
  value: "Esta ação irá salvar o registro",
  pt: {
    arrow: {
      style: {
        borderTopColor: "#4ade80",
      },
    },
    text: "bg-grass-400 text-white text-xs rounded-md p-1.5",
  },
  ptOptions: { mergeProps: true },
  ...hideDelay,
};

const newEdit = (row: object) => {
  if (selected.value.length) {
    selected.value = [];
  }
  editingRows.value = [...editingRows.value, row];
};
const cancelEdit = (row: Record<string, any>, index: number) => {
  editingRows.value = [];
  if (row[props.dataKey as any] && !props.value) return;
  items.value.splice(index, 1);
};
const selectRow = () => {
  if (editingRows.value.length) {
    selected.value = [];
  }
};

const startNewRow = () => {
  let newRow = { [props.dataKey as any]: null };
  props.columns.forEach(({ field, default: defaultValue }) => {
    if (defaultValue !== undefined) {
      newRow[field] = defaultValue;
    }
  });

  items.value[items.value.length] = newRow;
  editingRows.value.push(items.value[items.value.length - 1]);
  selected.value = [];
};
defineExpose({ startNewRow });
</script>
