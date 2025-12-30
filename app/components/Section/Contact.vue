<script setup lang="ts">
import WorldMap from "../ui/world-map/WorldMap.vue";

const dots = [
  {
    start: {
      lat: 25.574991,
      lng: -99.998289,
      label: "Tampiquito",
    },
    end: {
      lat: 35.744701,
      lng: 137.946167,
      label: "Japon",
    },
  },
];
</script>

<template>
  <section id="contact" class="flex flex-col gap-10 h-fit py-20 w-full">
    <div class="w-full flex flex-col gap-2">
      <h2 class="text-4xl text-white">
        <span class="text-red-500 mr-2">></span>Contacto<span
          class="text-red-500 animate-blink"
          >_</span
        >
      </h2>
      <p class="text-gray-500 text-xl">// Pongamonos en contacto.</p>
    </div>

    <div class="flex gap-10 flex-col-reverse md:flex-row-reverse">
      <div class="flex-1">
        <form action="">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label class="text-white text-lg tracking-wide" for="name"
                >Nombre*</label
              >
              <input
                name="name"
                placeholder="Ingrese su nombre"
                class="w-full text-white bg-transparent border-2 border-red-500 placeholder:text-gray-500 p-2"
              >
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-white text-lg tracking-wide" for="email"
                >Correo*</label
              >
              <input
                name="email"
                placeholder="Ingrese su correo"
                class="w-full text-white bg-transparent border-2 border-red-500 placeholder:text-gray-500 p-2"
              >
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-white text-lg tracking-wide" for="email"
                >Mensaje</label
              >
              <textarea
                name="email"
                placeholder="Ej: Quisiera saber que servicios ofreces"
                class="w-full text-white bg-transparent border-2 border-red-500 placeholder:text-gray-500 p-2 resize-none"/>
            </div>
            <BaseButton type="submit">Enviar</BaseButton>
          </div>
        </form>
      </div>
      <div class="flex-1 flex items-center">
        <WorldMap :dots="dots" map-color="#fb2c36" map-bg-color="#000" />
      </div>
    </div>
  </section>
</template>
