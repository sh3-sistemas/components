<template>
  <vueform ref="form$" size="lg" :display-errors="false" :endpoint="false" @submit="submitForm">
    <slot name="form" :form="form$"></slot>

    <group-element
      name="actionButtons"
      :columns="{ container: 12, label: 3, wrapper: 12 }"
      style="padding-top: 15px"
    >
      <slot name="actions"></slot>
      <button-element
        v-if="routeStep > 0"
        name="previous"
        button-type="button"
        button-class="!bg-transparent !border !border-selenium-500 !text-selenium-500"
        style="grid-column-start: 10"
        :columns="1"
        full
        @click="changeStep(routeStep - 1)"
      >
        Anterior
      </button-element>
      <button-element
        name="cancel"
        button-type="button"
        button-class="!bg-transparent !border !border-selenium-500 !text-selenium-500"
        :columns="1"
        full
        style="grid-column-start: 11"
        @click="form$.reset()"
      >
        Cancelar
      </button-element>
      <button-element
        name="submit"
        button-type="button"
        :button-class="stageLabel == 'Salvar' ? '!bg-grass-500 !border-grass-500 !text-white' : ''"
        :columns="1"
        style="grid-column-start: 12"
        :submits="routeStep == tabs.length - 1"
        full
        @click="routeStep != tabs.length - 1 ? changeStep(routeStep + 1) : null"
      >
        {{ stageLabel }}
      </button-element>
    </group-element>
  </vueform>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useFormStepper } from '@/stores'
import { useRouter, useRoute } from 'vue-router'
import useForm from '@/composables/useForm'
import { onBeforeRouteLeave } from 'vue-router'

import { useModuleConfig } from '@/stores'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'

const props = defineProps({
  mutation: {
    type: Object,
    default: () => {}
  },
  clientId: {
    type: String,
    default: ''
  },
  variablesCallback: {
    type: Function,
    default: () => {}
  },
  toastResponse: {
    type: Object,
    default: () => {
      return {
        success: 'Registro atualizado com sucesso',
        enable: true
      }
    }
  },
  formId: {
    type: String,
    default: ''
  }
})

const form$ = ref(null)
const route = useRoute()
const router = useRouter()
const stepperForm = useFormStepper()
const moduleConfig = useModuleConfig()
const { tabs } = storeToRefs(moduleConfig)

const callback = () => {
  const formData = stepperForm.getFormData(props.formId)
  const callBackData = props.variablesCallback(formData)

  return { ...formData, ...callBackData }
}

const emits = defineEmits(['onDone'])
const { submitForm } = useForm(reactive({ ...props, variablesCallback: callback }), {}, emits)

const routeStep = computed(() => {
  return tabs.value.findIndex((tab) => route.name == tab.name)
})

const stageLabel = computed(() => {
  return routeStep.value == tabs.value.length - 1 ? 'Salvar' : 'Próximo'
})

const saveData = () => {
  const { data } = form$.value
  stepperForm.saveFormStepData(props.formId, routeStep.value, data)
}

const changeStep = (step) => {
  saveData()
  const name = tabs.value[step].name
  router.push({ name })
}

onMounted(() => {
  stepperForm.createForm(props.formId, tabs.value)
  const stepData = stepperForm.getFormStepData(props.formId, routeStep.value)
  form$.value.update({
    ...stepData
  })
})

onBeforeRouteLeave(() => {
  const { data } = form$.value
  stepperForm.saveFormStepData(props.formId, routeStep.value, data)
})
</script>
