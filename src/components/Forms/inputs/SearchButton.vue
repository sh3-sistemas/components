<template>
  <ButtonElement button-label="Pesquisar" :columns="1" secondary @click="localizarModal = true" />
  <Sh3ResponsiveModal
    v-model="localizarModal"
    :header="searchLabel"
    :draggable="false"
    :style="{ maxWidth: '70vw', minHeight: '60dvh' }"
  >
    <div class="localizar-modal-wrapper p-5">
      <Sh3DataTable
        v-model:selection="selected"
        :items="data && data[queryKey] ? data[queryKey].data : []"
        :columns="columns"
        scrollable
        scroll-height="50dvh"
        filter-display="row"
        sort-mode="multiple"
        data-key="id"
        selection-mode="single"
        group-rows-by="processo_esocial.numero"
      />

      <div class="localizar-modal-wraper--action-bts flex justify-end gap-x-2 mt-6">
        <Sh3Button
          label="Cancelar"
          class="dpto-pessoal-header--incluir"
          text
          @click="localizarModal = false"
        />

        <Sh3Button label="Selecionar" class="dpto-pessoal-header--incluir" @click="selectItem" />
      </div>
    </div>
  </Sh3ResponsiveModal>
</template>
<script setup>
import { ref, toRefs, computed, watch } from 'vue'
import { getQueryName } from '@/apollo/utils'
import useFetch from '@/composables/useFetch'

const props = defineProps({
  searchLabel: {
    type: String,
    default: 'Buscar'
  },
  formInstance: {
    type: Object,
    default: () => {}
  },
  updateFields: {
    type: Array,
    default: () => {
      return [{ onSearchAttribute: '', onFormAttribute: '' }]
    }
  },
  search: {
    type: Object,
    default: () => {
      return {
        getters: {
          list: null,
          single: null
        },
        meta: {
          columns: []
        }
      }
    }
  },
  filter: {
    type: Object,
    default: () => {}
  }
})

const { formInstance, search, updateFields, filter } = toRefs(props)
const localizarModal = ref(false)
const selected = ref(null)
const options = ref({
  clientId: 'dptoPessoalClient'
})

const query = computed(() => search.value.getters.list)
const columns = computed(() => search.value.meta.columns)
const queryKey = computed(() => getQueryName(query.value))

const { fetch, data } = useFetch()
const getValueByPath = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj)
}

const selectItem = () => {
  const updateOnForm = {}
  updateFields.value.forEach(({ onFormAttribute, onSearchAttribute }) => {
    updateOnForm[onFormAttribute] = getValueByPath(selected.value, onSearchAttribute)
  })

  formInstance.value.update({
    ...updateOnForm
  })
  localizarModal.value = false
}

const loading = ref(false)
watch(localizarModal, async (modalOpen) => {
  if (!modalOpen) selected.value = null
  loading.value = true
  await fetch(query, filter.value, options.value)
  loading.value = false
})
</script>
