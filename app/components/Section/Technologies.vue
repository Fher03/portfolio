<script setup lang="ts">
type Technology = {
  name: string;
  icon: string;
};

const technologies: Record<"frontend" | "backend" | "devOps", Technology[]> = {
  frontend: [
    {
      name: "VueJS",
      icon: "fontisto:vuejs",
    },
    {
      name: "TailwindCSS",
      icon: "mdi:tailwind",
    },
    {
      name: "HTML",
      icon: "fontisto:html5",
    },
  ],
  backend: [
    {
      name: "NodeJS",
      icon: "fontisto:nodejs",
    },
    {
      name: "PostgreSQl",
      icon: "akar-icons:postgresql-fill",
    },
    {
      name: "redis",
      icon: "fontisto:redis",
    },
  ],
  devOps: [
    {
      name: "VS Code",
      icon: "fontisto:visual-studio",
    },
    {
      name: "Docker",
      icon: "fontisto:docker",
    },
    {
      name: "Terminal",
      icon: "si:terminal-fill",
    },
  ],
};
</script>

<template>
  <section class="flex flex-col gap-10 h-fit py-20 w-full">
    <div class="w-full flex flex-col gap-2">
      <h2 class="text-4xl text-white">
        <span class="text-red-500 mr-2">></span>Tecnologias<span class="text-red-500 animate-blink">_</span>
      </h2>
      <p class="text-gray-500 text-xl">// Herramientas y tecnologias que domino.</p>
    </div>
    <div class="flex flex-col gap-15">
      <h3 class="text-3xl text-white font-bold"><span class="text-red-500 font-semibold">//</span> FrontEnd</h3>
      <div class="flex flex-col md:flex-row justify-center gap-10">
        <div
          v-for="(tech, index) in technologies.frontend"
          :key="index"
          class="flex flex-col items-center justify-center gap-5 p-10 border-2 border-gray-500/40 w-full md:w-xs"
        >
          <Icon
            :name="tech.icon"
            class="text-white text-8xl"
          />
          <p class="text-red-500 text-xl">{{ tech.name }}</p>
        </div>
      </div>
    </div>
    <h3 class="text-3xl text-white font-bold"><span class="text-red-500 font-semibold">//</span> BackEnd</h3>
    <div class="flex flex-col md:flex-row justify-center gap-10">
      <div
        v-for="(tech, index) in technologies.backend"
        :key="index"
        class="flex flex-col items-center justify-center gap-5 p-10 border-2 border-gray-500/40 w-full md:w-xs"
      >
        <Icon
          :name="tech.icon"
          class="text-white text-8xl"
        />
        <p class="text-red-500 text-xl">{{ tech.name }}</p>
      </div>
    </div>
    <h3 class="text-3xl text-white font-bold"><span class="text-red-500 font-semibold">//</span> DevOps & Tools</h3>
    <div class="flex flex-col md:flex-row justify-center gap-10">
      <div
        v-for="(tech, index) in technologies.devOps"
        :key="index"
        class="flex flex-col items-center justify-center gap-5 p-10 border-2 border-gray-500/40 w-full md:w-xs"
      >
        <Icon
          :name="tech.icon"
          class="text-white text-8xl"
        />
        <p class="text-red-500 text-xl">{{ tech.name }}</p>
      </div>
    </div>
  </section>
</template>
