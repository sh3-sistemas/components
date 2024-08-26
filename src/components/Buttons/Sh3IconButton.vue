<template>
  <div class="card flex justify-center">
    <Button
      :class="twMerge('w-[40px] h-[40px]', styling)"
      :ptOptions="{ mergeProps: true }"
      v-bind="$attrs"
    >
      <template #icon>
        <slot>
          <Icon
            :icon="icon.name"
            :class="twMerge('w-5 h-auto text-white', icon.styling)"
          />
        </slot>
      </template>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/vue";

import Button from "primevue/button";
import type { PropType } from "vue";
import type { IconProps } from "@/types";

defineOptions({
  inheritAttrs: false,
});

defineProps({
  styling: {
    type: String,
    default: "",
  },
  icon: {
    type: Object as PropType<IconProps>,
    default: () => {
      return {
        name: "mi:add",
        styling: "",
      };
    },
  },
});
</script>
