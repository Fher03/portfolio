<script setup lang="ts">
type Links = {
  name: string;
  url: string;
  isSelected?: boolean;
};

const isSidebarOpen = ref(false);
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

function showSidebar() {
  console.log("Se presiona");
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
  <nav class="fixed top-0 text-white flex gap-10 px-10 md:px-20 items-center h-20 w-full border-b-2 border-gray-600/50">
    <div
      class="md:hidden"
      @click="showSidebar"
    >
      <Icon
        v-if="isSidebarOpen"
        name="charm:cross"
        class="text-4xl"
      />
      <Icon
        v-else
        name="charm:menu-hamburger"
        class="text-4xl"
      />
    </div>
    <h2 class="flex gap-3 text-center md:text-left w-full text-2xl">
      <span class="text-red-500">></span> Fher03<span class="text-red-500">_dev</span>
    </h2>
    <ul class="hidden lg:flex items-center justify-end gap-4 w-full">
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
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div
      v-if="isSidebarOpen"
      class="fixed lg:hidden top-20 bg-[#212121] h-full w-full"
    >
      <ul class="flex flex-col items-center justify-center gap-10 w-full h-full text-white">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="text-2xl"
          @click="changeSelectedLink(index)"
        >
          <a
            :href="link.url"
            :class="{ 'text-red-500': link.isSelected }"
            >[{{ link.name }}]</a
          >
        </li>
      </ul>
    </div>
  </Transition>
  <main class="mx-40 overflow-x-hidden">
    <slot />
  </main>
</template>
