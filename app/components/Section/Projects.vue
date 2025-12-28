<script setup lang="ts">
import CardSpotlight from "../ui/card-spotlight/CardSpotlight.vue";

type Card = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Página Promocional COMERBOT",
    description:
      "Para el desarrollo de la landing page de Neuropoint AI, se integró un conjunto de habilidades técnicas avanzadas en diseño y desarrollo web. El proyecto destacó por la creación de una interfaz UI/UX intuitiva y responsiva, orientada a proyectar innovación tecnológica. En el ámbito del desarrollo, se implementó una arquitectura sólida capaz de gestionar el consumo de APIs externas, permitiendo la integración de un chat de inteligencia artificial conversacional en tiempo real. Asimismo, se configuraron servicios de mensajería electrónica para automatizar la comunicación y captación de leads. Este proceso requirió un dominio profundo de lenguajes modernos, gestión de estados y manejo de protocolos de seguridad, logrando una plataforma robusta, escalable y optimizada para ofrecer una experiencia de usuario excepcional y vanguardista.",
    link: "https://comerbot.neuropoint.ai/",
    image: "/projects/comerbot_promotional.png",
    tags: ["Chat IA", "NuxtJS", "Figma"],
  },
  {
    title: "Muy pronto",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facilis, velit esse reprehenderit voluptatibusdeleniti consequatur corporis qui, quibusdam, molestiae asperiores. Numquam aliquam excepturi nostrum vitaeincidunt natus quo molestiae.",
    link: "#",
    image: "/projects/project-image.avif",
    tags: ["No Tech"],
  },
  {
    title: "Muy pronto",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facilis, velit esse reprehenderit voluptatibusdeleniti consequatur corporis qui, quibusdam, molestiae asperiores. Numquam aliquam excepturi nostrum vitaeincidunt natus quo molestiae.",
    link: "#",
    image: "/projects/project-image.avif",
    tags: ["No Tech"],
  },
];
</script>

<template>
  <section id="projects" class="h-fit py-20 w-full flex flex-col gap-16">
    <div class="w-full flex flex-col gap-2">
      <h2 class="text-4xl text-white">
        <span class="text-red-500 mr-2">></span>Proyectos<span
          class="text-red-500 animate-blink"
          >_</span
        >
      </h2>
      <p class="text-gray-500 text-xl">
        // Algunos de mis trabajos más recientes
      </p>
    </div>
    <!-- Content -->
    <div
      class="flex flex-col md:flex-row flex-wrap w-full gap-5 items-center justify-center"
    >
      <!-- Card -->
      <CardSpotlight
        v-for="(card, index) in cards"
        :key="index"
        class="h-150 w-full md:w-sm border-2 border-gray-600/50 p-5"
      >
        <div class="flex flex-col justify-between h-full">
          <NuxtImg :src="card.image" class="w-72 h-auto mx-auto" />
          <h3 class="text-white text-2xl font-bold">{{ card.title }}</h3>
        <p class="text-gray-500 text-base h-[35%] overflow-y-auto">{{ card.description }}</p>
          <div class="flex gap-4">
            <span
              v-for="(tag, indexTag) in card.tags"
              :key="indexTag"
              class="border-red-700/40 border-2 bg-red-800/20 px-4 py-2 text-red-500 block"
              >{{ tag }}</span
            >
          </div>
          <div class="flex gap-2 items-center text-red-500">
            <BaseButton type="anchor" :path="card.link"
              >Ver Proyecto</BaseButton
            >
            <Icon name="heroicons:arrow-right" />
          </div>
        </div>
      </CardSpotlight>
    </div>
  </section>
</template>
