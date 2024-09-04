<template>
  <Vueform
    ref="form$"
    size="lg"
    :display-errors="false"
    :endpoint="false"
    :disabled="disabled"
    @submit="submitForm"
  >
    <slot name="form" :form="form$" :disabled="disabled"></slot>

    <GroupElement
      name="actionButtons"
      :columns="{ container: 12, label: 3, wrapper: 12 }"
      style="padding-top: 15px"
    >
      <ButtonElement
        name="cancel"
        button-type="button"
        button-class="!bg-transparent !border !border-red-700 !text-red-700"
        :columns="1"
        full
        style="grid-column-start: 1"
        @click="form$.reset()"
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

<script setup>
import { onMounted, ref } from "vue";
import { useLocalizar } from "@/stores";
import useForm from "@/composables/useForm";

const props = defineProps({
  mutation: {
    type: Function,
    default: () => {},
  },
  deleteMutation: {
    type: Function,
    default: () => {},
  },
  clientId: {
    type: String,
    default: "",
  },
  variablesCallback: {
    type: Function,
    default: () => {},
  },
  toastResponse: {
    type: Object,
    default: () => {
      return {
        success: "Registro atualizado com sucesso",
        enable: true,
      };
    },
  },
});

const form$ = ref(null);
const disabled = ref(true);
const selected = ref(null);
const emits = defineEmits(["onDone", "onDelete"]);

const { submitForm, deleteRegister } = useForm(props, selected, emits);
const localizador = useLocalizar();

onMounted(() => {
  localizador.$subscribe((watcher) => {
    const { newValue } = watcher.events;
    selected.value = newValue;
    disabled.value = false;
    form$.value.update({
      ...newValue,
    });
  });
});
</script>
