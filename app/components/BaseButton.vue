<script setup lang="ts">
type ButtonColor = "primary" | "secondary" | "anchor";

const props = defineProps<{
  type?: "anchor" | "button" | "submit";
  color?: ButtonColor;
}>();

const colorStyles: Record<ButtonColor, string> = {
  primary: "border-red-500 text-red-500",
  secondary: "border-gray-500 text-gray-500",
  anchor: "border-none",
};

const hoverStyles: Record<ButtonColor, string> = {
  primary: "bg-red-500",
  secondary: "bg-gray-500",
  anchor: "border-none",
};
</script>

<template>
  <button
    v-if="props.type !== 'anchor'"
    :type="props.type || 'button'"
    class="bg-transparent border-2 px-4 xl:px-6 py-3 text-lg xl:text-xl group relative overflow-hidden transition-colors duration-300"
    :class="[colorStyles[props.color || 'primary']]"
  >
    <span
      class="absolute inset-0 w-0 transition-all duration-500 ease-out group-hover:w-full"
      :class="[hoverStyles[props.color || 'primary']]"
    />
    <span class="relative z-10 group-hover:text-white transition-colors duration-500">[<slot />]</span>
  </button>
  <a
    v-else
    href="#"
    >[<slot />]</a
  >
</template>
