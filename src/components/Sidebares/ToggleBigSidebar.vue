<template>
  <div
    :class="
      twMerge(
        'toggle-big--sidebar max-w-[320px] w-[20%] flex flex-col gap-2 pt-6 pb-3 bg-white',
        styling.container,
      )
    "
  >
    <div
      :class="
        twMerge('toggle-big-sidebar--header w-full h-auto', styling.header)
      "
    >
      <slot name="header"></slot>
    </div>
    <div
      :class="
        twMerge(
          'toggle-big-sidebar--body w-full grow overflow-y-scroll',
          styling.body,
        )
      "
    >
      <slot name="body"></slot>
    </div>
    <div
      :class="
        twMerge('toggle-big-sidebar--footer w-full h-[7%]', styling.footer)
      "
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import { twMerge } from "tailwind-merge";

type BigSidebarStyle = {
  container: string;
  header: string;
  body: string;
  footer: string;
};

defineProps({
  styling: {
    type: Object as PropType<BigSidebarStyle>,
    default: () => {
      return {
        container: "",
        header: "",
        body: "",
        footer: "",
      };
    },
  },
});
</script>
<style scoped>
.toggle-big--sidebar {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
