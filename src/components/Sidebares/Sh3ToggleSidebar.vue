<template>
  <Transition :name="isOpen ? 'open' : 'close'">
    <component :is="isOpen ? ToggleBigSidebar : ToggleSmallSidebar">
      <template #header>
        <div
          :class="
            twMerge(
              'toggle-sidebar--header-wrapper flex flex-col w-full items-center',
              isOpen ? 'px-5' : 'px-1',
            )
          "
        >
          <div
            class="toggle-sidebar-header--title-wrapper w-full inline-flex items-center justify-center gap-4"
          >
            <div
              class="toggle-sidebar-header--icon !w-12 !h-12 rounded-full bg-inherit border border-mercury-400 flex items-center justify-center shrink-0"
            >
              <img :src="icon.src" class="w-10 h-auto" :title="icon.title" />
            </div>
            <span
              v-if="isOpen"
              class="grow leading-tight line-clamp-3"
              :title="title"
              >{{ title }}</span
            >
          </div>
          <slot name="header-extra-content"></slot>
        </div>
      </template>
      <template #body><slot name="body-content"></slot></template>
      <template #footer><slot name="footer-content"></slot></template>
    </component>
  </Transition>
  <button
    @click="toggleSidebar()"
    class="w-7 shrink-0 h-7 mt-16 -ml-6 flex items-center justify-center rounded-full relative bg-mercury-300 hover:bg-mercury-400 active:bg-selenium-300 shadow"
  >
    <Icon
      :icon="isOpen ? 'majesticons:chevron-left' : 'majesticons:chevron-right'"
      class="w-5 h-auto text-white"
    />
  </button>
</template>
<script setup lang="ts">
import { ref, type PropType } from "vue";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/vue";

import ToggleBigSidebar from "./ToggleBigSidebar.vue";
import ToggleSmallSidebar from "./ToggleSmallSidebar.vue";

const isOpen = ref(true);

const emits = defineEmits(["onOpen", "onClose"]);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    emits("onClose");
    return;
  }
  emits("onOpen");
};

type ToggleIcon = {
  src: string;
  title: string;
};

defineProps({
  title: { type: String, default: "Prefeitura Municipal de São João Del Rei" },
  icon: {
    type: Object as PropType<ToggleIcon>,
    default: () => {
      return {
        src: "https://png.pngtree.com/png-clipart/20220626/original/pngtree-pink-cute-cat-icon-animal-png-yuri-png-image_8188672.png",
        title: "",
      };
    },
  },
});

defineExpose({ toggleSidebar });
</script>
<style scoped>
.open-enter-active,
.close-leave-active {
  transition: all 0.2s ease;
}

.open-enter-from,
.close-leave-to {
  width: 0px;
}

.open-enter-active .inner,
.close-leave-active .inner {
  transition: all 0.15s ease-in-out;
}

.open-enter-from .inner,
.close-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}
</style>
