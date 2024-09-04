<template>
  <Vueform
    ref="form$"
    size="lg"
    :display-errors="false"
    :endpoint="false"
    :disabled="!options.crud.save"
    @submit="submitForm"
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
        Deletar
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

const confirm = useConfirm();

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

export type CrudOptions = {
  delete: boolean;
  save: boolean;
};

export type FormOptions = {
  crud: CrudOptions;
};

export interface Sh3GenericFormProps {
  submitForm: () => void;
  deleteRegister: () => void;
  options?: FormOptions;
}

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

const form$ = ref<Vueform>();
const emits = defineEmits<{ setup: [form$: typeof form$] }>();

onMounted(() => emits("setup", form$));
</script>
