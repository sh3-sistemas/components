<template>
  <IconField iconPosition="right" @click="toggle">
    <InputIcon class="pi pi-search"> </InputIcon>
    <InputText placeholder="Search" v-model="inputDate" />
  </IconField>

  <OverlayPanel ref="op" appendTo="body">
    <div class="overlay-wrapper flex flex-col gap-y-2">
      <div class="max-min-calendar-wrapper">
        <div class="flex gap-4">
          <Calendar v-model="minDate" placeholder="Min." v-bind="maxMinProps" />
          <Divider />
          <Calendar v-model="maxDate" placeholder="Máx." v-bind="maxMinProps" />
          <Sh3Button label="Ok" @click="selectDate" />
        </div>
      </div>
      <div class="flex justify-content-center items-center w-full flex-col">
        <Calendar
          v-model="date"
          selectionMode="range"
          inline
          dateFormat="dd/mm/yy"
        />

        <span v-if="countDaysBeetweenDates" class="text-selenium-800 my-2">
          {{ countDaysBeetweenDates }} dias selecionados</span
        >
      </div>
    </div>
  </OverlayPanel>
</template>

<script setup lang="ts">
import { ref, watch, computed, type PropType } from "vue";
import Calendar, { type CalendarProps } from "primevue/calendar";
import OverlayPanel from "primevue/overlaypanel";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider";
import Sh3Button from "../../Buttons/Sh3Button.vue";
import type { ItemColum } from "../DataTable/Sh3DataTable.vue";

const props = defineProps({
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

// const filterModel = defineModel<Nullable<string>>();
const date = ref();
const inputDate = ref();

const minDate = ref();
const maxDate = ref();
const maxMinProps = <CalendarProps>{
  showIcon: true,
  iconDisplay: "input",
  dateFormat: "dd/mm/yy",
  ptOptions: { mergeProps: true },
  pt: {
    input: "w-28",
  },
};

const op = ref();
const toggle = (event: any) => {
  op.value.toggle(event);
};

watch([minDate, maxDate], ([min, max]: Array<Date>) => {
  if (min && max) {
    date.value = [min, max];
  }
});

watch(date, (value: Array<Date>) => {
  if (value) {
    minDate.value = value[0];
    maxDate.value = value[1];
  }
});

const selectDate = (event: any) => {
  inputDate.value = `${minDate.value?.toLocaleDateString()} - ${maxDate.value?.toLocaleDateString()}`;
  props.filterCallback();

  toggle(event);
};

const countDaysBeetweenDates = computed(() => {
  if (!maxDate.value || !minDate.value) return null;

  return (
    Math.floor(
      (maxDate.value.getTime() - minDate.value.getTime()) /
        (1000 * 60 * 60 * 24),
    ) + 1
  );
});
</script>
