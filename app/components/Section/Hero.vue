<script setup lang="ts">
import { useTypewriter } from "~/composable/useTypewriter";
const roles = ['"Full-Stack Developer";', '"Product Manager";', '"Scrum Master";', '"VueJS Developer";'];

const { displayedText, isPaused, startTyping } = useTypewriter(roles);

onMounted(() => {
  startTyping();
});
</script>
<template>
  <section
    id="hero"
    class="flex flex-col h-[700px] gap-10 xl:gap-7 text-center items-center justify-center md:h-[500px] xl:h-screen w-full"
  >
    <h1 class="text-6xl xl:text-8xl text-white font-bold">
      <span class="text-red-500 mr-2 xl:mr-16">></span>Fernando Rodríguez<span class="text-red-500 animate-blink"
        >_</span
      >
    </h1>
    <h2 class="text-white text-2xl xl:text-4xl font-mono">
      <span class="text-red-500">const</span>
      <span class="text-gray-400"> role</span>
      <span class="text-white"> = </span>
      <span class="text-white">{{ displayedText }}</span>
      <span
        class="text-red-500 ml-1 inline-block"
        :class="isPaused ? 'animate-blink' : 'animate-pulse'"
        >|</span
      >
    </h2>
    <div class="text-gray-400 text-base xl:text-2xl font-medium my-5">
      <p>// Transformando ideas en código limpio y escalable.</p>
      <p>// Especializado en crear experiencias digitales excepcionales.</p>
    </div>
    <div class="flex gap-10">
      <!-- Cambiar a otro tipo de acciones -->
      <BaseButton color="primary">Descargar CV</BaseButton>
      <BaseButton color="secondary">Contacto</BaseButton>
    </div>
  </section>
</template>
