<template>
  <StaticElement
    name="empty-element"
    class="p-2 border border-dashed border-mercury-200 rounded-sm text-center text-mercury-500"
    :conditions="[(form$) => emptyStaticElementCondition(form$)]"
  >
    Clique em "+ Adicionar" para incluir um novo item.
  </StaticElement>
  <ButtonElement :button-label="label" :columns="2" secondary @click="localizarModal = true" />
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
        selection-mode="multiple"
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
import { toRefs, ref, computed, watch } from 'vue'
import { getQueryName } from '@/apollo/utils'
import useFetch from '@/apollo/composables/useFetch'

const props = defineProps({
  searchLabel: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: '+ Adicionar'
  },
  formInstance: {
    type: Object,
    default: () => {}
  },
  listName: {
    type: String,
    default: 'list'
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
  },
  dataKey: {
    type: String,
    default: 'id'
  }
})

const { formInstance, listName, search, updateFields, filter } = toRefs(props)
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

const formatSelectedItems = (item) => {
  const updateOnForm = {}
  updateFields.value.forEach(({ onFormAttribute, onSearchAttribute }) => {
    updateOnForm[onFormAttribute] = getValueByPath(item, onSearchAttribute)
  })
  updateOnForm[props.listName + 'Id'] = item[props.dataKey]

  return updateOnForm
}

const emptyStaticElementCondition = (form) => {
  const element = form.elements$
  const list = element[listName.value]

  return list.empty
}

const selectItem = () => {
  if (!formInstance.value) return

  const element = formInstance.value.elements$

  const list = element[listName.value]

  const alreadyOnList = list.model.map((item) => item[props.listName + 'Id'])

  const itemsToAdd = selected.value
    .filter((item) => !alreadyOnList.includes(item[props.dataKey]))
    .map((item) => formatSelectedItems(item))

  itemsToAdd.forEach((item) => {
    list.add({ ...item })
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
