<template>
  <div
    :class="
      twMerge(
        'toggle-sidebar--wrapper h-full flex flex-col gap-2 pt-6 pb-3 bg-white',
        styling.container,
        isOpen ? 'w-[320px]' : 'w-[70px]'
      )
    "
  >
    <div
      :class="
        twMerge(
          'toggle-sidebar--header-wrapper flex flex-col w-full items-center',
          isOpen ? 'px-5' : 'px-1'
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
        <Transition name="title">
          <span
            v-if="isOpen"
            class="grow leading-tight line-clamp-3"
            :title="title"
            >{{ title }}</span
          >
        </Transition>
      </div>
      <slot name="header-extra-content"></slot>
    </div>
    <div
      :class="
        twMerge(
          'toggle-sidebar--body overflow-y-auto grow',
          isOpen ? 'overflow-y-auto' : 'overflow-hidden'
        )
      "
    >
      <slot name="body-content"></slot>
    </div>
    <div class="toggle-sidebar--footer h-[7%]">
      <slot name="footer-content"></slot>
    </div>
  </div>
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
import { ref } from "vue";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/vue";
import type { Sh3ToggleSidebarProps } from "./types";

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

withDefaults(defineProps<Sh3ToggleSidebarProps>(), {
  title: "Prefeitura Municipal de São João Del Rei",
  icon: () => {
    return {
      src: "https://png.pngtree.com/png-clipart/20220626/original/pngtree-pink-cute-cat-icon-animal-png-yuri-png-image_8188672.png",
      title: "",
    };
  },
  styling: () => {
    return {
      container: "",
      header: "",
      body: "",
      footer: "",
    };
  },
});

defineExpose({ toggleSidebar });
</script>
<style scoped>
.toggle-sidebar--wrapper {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}
.title-enter-active {
  transition: opacity 0.8s ease;
}

.title-enter-from,
.title-leave-to {
  opacity: 0;
}

.open-enter-from {
  width: 70px;
  /*   transform: translateX(-100%); */
}
/* .open-enter-active,
.close-leave-active {
  transition: all 0.2s ease;
  transform: 2s, left 2s;
  } */

/* .open-enter-from,
  .close-leave-to {
    left: -320px;
    } */

.open-enter-active .inner {
  /*   transition: all 0.15s ease-in-out; */
  overflow: hidden;
  background-color: violet;
}

/* .open-enter-active .inner,
.close-leave-active .inner {
  transition: all 0.15s ease-in-out;
} */

/* .open-enter-from .inner,
.close-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
} */

.open-enter-from .inner {
  opacity: 0;
}
</style>
