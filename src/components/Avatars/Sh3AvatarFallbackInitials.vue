<template>
  <!-- TODO: Remove radix-vue reference -->
  <AvatarRoot
    :class="
      twMerge(
        'bg-blackA3 inline-flex h-[92px] w-[92px] select-none items-center justify-center overflow-hidden rounded-full align-middle',
        avatarStyle.root,
      )
    "
  >
    <AvatarImage
      :class="
        twMerge(
          'h-full w-full rounded-[inherit] object-cover',
          avatarStyle.image,
        )
      "
      :src="profile.photo"
      :alt="profile.name"
    />
    <AvatarFallback
      :class="
        twMerge(
          'text-grass11 leading-1 flex h-full w-full items-center justify-center rounded-full bg-mercury-100/80',
          avatarStyle.fallback,
        )
      "
      :delay-ms="300"
    >
      {{ initials }}
    </AvatarFallback>
  </AvatarRoot>
</template>

<script lang="ts" setup>
import { computed, type PropType, toRef } from "vue";
import { twMerge } from "tailwind-merge";
import { AvatarFallback, AvatarImage, AvatarRoot } from "radix-vue";

type AvatarStyle = {
  root: string;
  image: string;
  fallback: string;
};

type Profile = {
  name: string;
  photo: string;
};

const props = defineProps({
  profile: {
    type: Object as PropType<Profile>,
    required: true,
    default: () => {
      return {
        name: "Fernando Pessoa",
        photo: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
      };
    },
  },
  avatarStyle: {
    type: Object as PropType<AvatarStyle>,
    default: () =>
      <AvatarStyle>{
        root: "",
        image: "",
        fallback: "bg-gray-200 font-medium text-xs",
      },
  },
});

const profileRefs = toRef(props, "profile");

const initials = computed(() => {
  if (!profileRefs.value.name) return "UK";
  const { name } = profileRefs.value;
  return name
    .match(/(\b\S)?/g)!
    .join("")
    .match(/(^\S|\S$)?/g)!
    .join("")
    .toUpperCase();
});
</script>
