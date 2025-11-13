<script setup lang="ts">
type Links = {
  name: string;
  url: string;
  isSelected?: boolean;
};

const links = reactive<Links[]>([
  {
    name: "Inicio",
    url: "#",
    isSelected: true,
  },
  {
    name: "Proyectos",
    url: "#",
  },
  {
    name: "Tecnologias",
    url: "#",
  },
  {
    name: "Sobre mí",
    url: "#",
  },
  {
    name: "Contacto",
    url: "#",
  },
]);

function changeSelectedLink(index: number) {
  links.forEach((link) => {
    link.isSelected = false;
  });
  if (links[index]) {
    links[index].isSelected = true;
  }
}
</script>

<template>
  <nav class="sticky top-0 text-white flex justify-between px-40 items-center bg-[#212121] h-20 w-full">
    <h2 class="text-2xl"><span class="text-red-500">></span> Fher03<span class="text-red-500">_dev</span></h2>
    <ul class="flex gap-4">
      <li
        v-for="(link, index) in links"
        :key="index"
        @click="changeSelectedLink(index)"
      >
        <a
          :href="link.url"
          :class="{ 'text-red-500': link.isSelected }"
          >[{{ link.name }}]</a
        >
      </li>
    </ul>
  </nav>
</template>
