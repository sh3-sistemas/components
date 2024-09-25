<template>
  <DataTable
    v-model:selection="selected"
    v-model:editingRows="editingRows"
    edit-mode="row"
    :value="items"
    @update:selection="selectRow"
    v-bind="$attrs"
  >
    <template #empty>{{ emptyString }} </template>
    <Column v-if="selectionMode" :selection-mode="selectionMode" class="w-10" />
    <Column
      v-for="col of columns.filter((x) => x.visible)"
      :key="col.field"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable"
      :pt="{ sortBadge: 'hidden' }"
    >
      <template #body="{ data: row, field }">
        {{ row[field] }}
      </template>
      <template v-if="col.editable" #editor="{ data: row, field }">
        <InputText v-model="row[field]" :type="col.filterType.toLowerCase()" />
      </template>
    </Column>
    <Column class="w-20">
      <template #body="{ data: row }">
        <Button
          icon-pos="right"
          class="!ring-0 !shadow-none !bg-transparent !text-inherit !flex mx-auto"
          icon="pi pi-pencil"
          :disabled="editingRows.length > 0"
          @click="newEdit(row)"
        />
      </template>
      <template #editor="{ data: row, index }">
        <Button
          v-tooltip.top="{
            value: 'Esta ação irá salvar o registro',
            pt: {
              arrow: {
                style: {
                  borderTopColor: '#4ade80',
                },
              },
              text: 'bg-green-400 text-xs rounded-md p-1.5',
            },
            ptOptions: { mergeProps: true },
            showDelay: 50,
            hideDelay: 50,
          }"
          icon-pos="right"
          class="!ring-0 !bg-transparent !text-inherit !shadow-none"
          icon="pi pi-check"
          @click="updateRow(row)"
        />
        <Button
          v-tooltip.top="{
            value: 'Cancelar',
            pt: { text: 'bg-slate-300 text-xs rounded-md p-1.5' },
            showDelay: 50,
            hideDelay: 50,
          }"
          icon-pos="right"
          class="!ring-0 !bg-transparent !text-inherit !shadow-none"
          icon="pi pi-times"
          @click="cancelEdit(row, index)"
        />
      </template>
    </Column>
  </DataTable>
  {{ value }}
</template>

<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import type { DataTableProps } from "primevue/datatable";

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

export type ItemColum = {
  field: any;
  header: string;
  filterType: string;
  default: any;
  sortable: boolean;
  visible: boolean;
  editable: boolean;
};

type Sh3DataTableEditableProps = DataTableProps & {
  updateRow: (row: object) => void;
  columns: Array<ItemColum>;
  emptyString: string;
};

const props = withDefaults(defineProps<Sh3DataTableEditableProps>(), {
  emptyString: "Nenhum Registro encontrado",
  dataKey: "id",
});

defineOptions({
  inheritAttrs: false,
});

function newEdit(row: object) {
  if (selected.value.length) {
    selected.value = [];
  }
  editingRows.value = [...editingRows.value, row];
}
function cancelEdit(row: Record<string, any>, index: number) {
  editingRows.value = [];
  if (row[props.dataKey as any] && !props.value) return;
  items.value.splice(index, 1);
}
function selectRow() {
  if (editingRows.value.length) {
    selected.value = [];
  }
}

const startNewRow = () => {
  let newRow = { [props.dataKey as any]: null };
  for (let col of props.columns) {
    if (col.default != undefined) {
      newRow[col.field] = col.default;
    }
  }
  items.value[items.value.length] = newRow;
  editingRows.value = [
    ...editingRows.value,
    items.value[items.value.length - 1],
  ];
};
defineExpose({ startNewRow });
</script>
