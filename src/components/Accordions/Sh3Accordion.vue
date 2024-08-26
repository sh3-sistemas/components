<template>
  <!-- TODO: Remove radix-vue reference -->
  <AccordionRoot
    :class="twMerge('AccordionRoot space-y-2 pr-2', style.root)"
    :default-value="items.length > 0 ? '0' : ''"
    type="single"
    :collapsible="true"
  >
    <template v-for="(item, index) in items" :key="index">
      <AccordionItem class="AccordionItem" :value="index.toString()">
        <AccordionHeader class="flex">
          <AccordionTrigger
            :class="
              twMerge(
                'AccordionTrigger h-11 flex flex-1 py-0 px-5 items-center justify-between bg-mercury-50 hover:bg-mercury-100',
                style.trigger,
              )
            "
          >
            <span>{{ item.title }}</span>
            <Icon
              icon="radix-icons:chevron-down"
              :class="
                twMerge('AccordionChevron text-mercury-700', style.chevron)
              "
              aria-hidden
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="AccordionContent">
          <slot :item="item"></slot>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "radix-vue";
import { Icon } from "@iconify/vue";
import { twMerge } from "tailwind-merge";
import type { PropType } from "vue";

type AccordionStyle = {
  root: string;
  trigger: string;
  chevron: string;
};

defineProps({
  items: {
    type: Array<Record<string, any>>,
    default: () => [],
  },
  style: {
    type: Object as PropType<AccordionStyle>,
    default: () => {
      return {
        root: "",
        trigger: "",
        chevron: "",
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.AccordionRoot {
  scroll-behavior: smooth;
  overflow: auto;
}
.AccordionRoot::-webkit-scrollbar {
  width: 8px;
  background-color: inherit;
}
.AccordionRoot::-webkit-scrollbar-thumb {
  background-color: #e6e7e8;
}
.AccordionRoot::-webkit-scrollbar-thumb:hover {
  background-color: #b7bdc9;
  transition: background-color 1s ease-in-out 1s;
}

.AccordionItem:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.AccordionItem:focus-within {
  position: relative;
  z-index: 1;
}

.AccordionTrigger {
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
}

.AccordionTrigger[data-state="open"] > .AccordionChevron {
  transform: rotate(180deg);
}

.AccordionContent {
  overflow: hidden;
}
.AccordionContent[data-state="open"] {
  animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  display: flex;
  flex-direction: row;
}
.AccordionContent[data-state="closed"] {
  animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
}

.AccordionChevron {
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
