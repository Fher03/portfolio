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
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
  <nav
    class="z-50 fixed top-0 text-white flex gap-10 px-10 md:px-20 items-center h-20 w-full border-b-2 border-gray-600/50 bg-[#212121]"
  >
    <div
      class="md:hidden cursor-pointer"
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
    <ul class="hidden lg:flex items-center justify-end gap-7 w-full">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="cursor-pointer hover:text-red-400 transition-colors"
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

  <!-- Sidebar con backdrop blur -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isSidebarOpen"
      class="fixed lg:hidden top-20 bg-black/90 backdrop-blur-md h-full w-full z-50"
      @click="showSidebar"
    >
      <Transition
        enter-active-class="transition duration-300 ease-out delay-100"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <ul
          v-if="isSidebarOpen"
          class="flex flex-col items-center justify-center gap-10 w-full h-full text-white"
        >
          <li
            v-for="(link, index) in links"
            :key="index"
            class="text-2xl cursor-pointer hover:scale-110 transition-transform"
            @click.stop="
              changeSelectedLink(index);
              showSidebar();
            "
          >
            <a
              :href="link.url"
              :class="{ 'text-red-500': link.isSelected }"
              >[{{ link.name }}]</a
            >
          </li>
        </ul>
      </Transition>
    </div>
  </Transition>

  <main class="mx-6 xl:mx-40 overflow-x-hidden pt-20">
    <slot />
  </main>
</template>
