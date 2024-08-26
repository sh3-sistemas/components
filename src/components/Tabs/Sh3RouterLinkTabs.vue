<template>
  <div class="card">
    <TabView
      v-model:activeIndex="model"
      :scrollable="true"
      v-bind="$attrs"
      @tab-change="
        (e: any) => {
          emits('changeRoute', tabGroup[e.index].name);
        }
      "
    >
      <TabPanel
        v-for="(tab, index) in tabGroup"
        v-bind:key="index"
        :header="tab.label"
      >
        <slot></slot>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

const model = defineModel<number>();

type RouterTab = {
  name: string;
  label: string;
};

defineOptions({
  inheritAttrs: false,
});

defineProps({
  tabGroup: {
    type: Array as PropType<Array<RouterTab>>,
    default: () => <RouterTab[]>[],
  },
});

const emits = defineEmits(["changeRoute"]);
</script>
