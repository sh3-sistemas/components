<template>
  <Sh3Accordion :items="items" v-slot="{ item }">
    <div class="links-wrapper w-full flex flex-col py-1 gap-1">
      <button
        class="links w-full py-2 px-4 inline-flex justify-start gap-3 items-center rounded-sm hover:bg-mercury-100 active:bg-copper-100/60"
        v-for="(link, i) in item.links"
        v-bind:key="i"
      >
        <EraCardTag :tagVariation="link.tag" />
        <div class="AccordionContentText text-sm text-mercury-900">
          {{ link.path }}
        </div>
      </button>
    </div>
  </Sh3Accordion>
</template>

<script setup lang="ts">
import Sh3Accordion from "./Sh3Accordion.vue";

type AccordionItem = {
  title: string;
  links: Array<{
    tag: string;
    path: string;
  }>;
};

defineProps({
  items: {
    type: Array<AccordionItem>,
    default: () => [],
  },
});
</script>
