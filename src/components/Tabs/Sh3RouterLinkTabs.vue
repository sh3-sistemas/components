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
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import type { Sh3RouterLinkTabsProps } from "./types";

withDefaults(defineProps<Sh3RouterLinkTabsProps>(), {
  tabGroup: () => [],
});

defineOptions({
  inheritAttrs: false,
});

const model = defineModel<number>();
const emits = defineEmits(["changeRoute"]);
</script>
