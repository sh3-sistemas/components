<template>
  <Vueform
    ref="form$"
    size="md"
    :display-errors="false"
    :endpoint="false"
    :disabled="!options.crud.save"
    @submit="submitForm"
    v-bind="$attrs"
  >
    <slot name="form" :form="form$"></slot>
    <GroupElement
      name="actionButtons"
      :columns="{ container: 12, label: 3, wrapper: 12 }"
      style="padding-top: 15px"
    >
      <ButtonElement
        v-if="options.crud.delete"
        name="delete"
        button-type="button"
        button-class="!bg-transparent !border !border-red-700 !text-red-700"
        :columns="1"
        full
        style="grid-column-start: 1"
        @click="deletion"
      >
        Excluir
      </ButtonElement>
      <slot name="actions"></slot>
      <ButtonElement
        name="cancel"
        button-type="button"
        button-class="!bg-transparent !border !border-selenium-500 !text-selenium-500"
        :columns="1"
        full
        style="grid-column-start: 11"
        @click="form$?.reset()"
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
import { useConfirm, DialogUtils } from "../Dialogs";
import type { Sh3GenericFormProps } from "./types";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Sh3GenericFormProps>(), {
  submitForm: () => {},
  deleteRegister: () => {},
  options: () => {
    return {
      crud: {
        delete: false,
        save: false,
      },
    };
  },
});

const confirm = useConfirm();
const form$ = ref<Vueform>();
const emits = defineEmits<{ setup: [form$: typeof form$] }>();
const syncForm = (data: any) =>
  form$.value ? form$.value.update({ ...data }) : null;
const clearForm = () => (form$.value ? form$.value.reset() : null);
const deletion = () => {
  confirm.require(
    DialogUtils.deletionDialogBase({
      reject: () => {},
      accept: () => {
        props.deleteRegister();
      },
    })
  );
};

onMounted(() => emits("setup", form$));
defineExpose({ clearForm, deletion, syncForm });
</script>
