<template>
  <Vueform ref="form$" size="lg" :display-errors="false" :endpoint="false">
    <slot name="form" :form="form$"></slot>

    <GroupElement
      name="actionButtons"
      :columns="{ container: 12, label: 3, wrapper: 12 }"
      style="padding-top: 15px"
    >
      <slot name="actions"></slot>
      <ButtonElement
        name="cancel"
        button-type="button"
        button-class="!bg-transparent !border !border-selenium-500 !text-selenium-500"
        :columns="1"
        full
        style="grid-column-start: 11"
        @click="form$.reset()"
      >
        Cancelar
      </ButtonElement>
      <ButtonElement
        name="submit"
        button-type="button"
        button-class="!bg-grass-500 !border-grass-500 !text-white"
        :columns="1"
        style="grid-column-start: 12"
        submits
        full
      >
        Salvar
      </ButtonElement>
    </GroupElement>
  </Vueform>
</template>

<script setup lang="ts">
import type { Vueform } from "@vueform/vueform";
import { onMounted } from "vue";
import { ref, withDefaults } from "vue";

export interface Sh3GenericFormProps {
  submitForm: () => void;
}

withDefaults(defineProps<Sh3GenericFormProps>(), {
  submitForm: () => {},
});

const form$ = ref<Vueform>();
const emits = defineEmits<{ setup: [form$: typeof form$] }>();

onMounted(() => emits("setup", form$));
</script>
