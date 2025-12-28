<template>
  <section id="aboutme" class="flex flex-col items-center gap-10 h-fit py-20 w-full">
    <div class="w-full flex flex-col gap-2">
      <h2 class="text-2xl md:text-4xl text-white">
        <span class="text-red-500 mr-2">></span>Sobre mí<span class="text-red-500 animate-blink">_</span>
      </h2>
      <p class="text-gray-500 md:text-xl">// Mi trayectoria profesional.</p>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-center gap-10">
        <div class="flex-1 border-solid border-2 border-red-500 object-cover">
          <NuxtImg src="/about_me.jpg" class="w-full border-transparent border-2 max-w-2xl"/>
        </div>
      <p class="text-sm md:text-xl flex-1 text-justify text-white">Como desarrollador Full Stack en la recta final de mi carrera universitaria, poseo una visión global del ciclo de vida de un proyecto de software. Disfruto el reto de trabajar en ambos lados de la moneda: desde la lógica compleja y el manejo de datos en el servidor, hasta la creación de interfaces visuales intuitivas y dinámicas que cautivan al usuario final.
            Mi filosofía de trabajo se basa en la mejora constante. No solo busco escribir código que funcione, sino código que sea elegante y fácil de mantener. Tengo un interés genuino en la automatización de procesos y en encontrar soluciones innovadoras a problemas cotidianos. Estoy siempre en busca de nuevas herramientas y metodologías que me permitan seguir desarrollando aplicaciones web de alto impacto y continuar creciendo profesionalmente en esta industria en constante cambio.</p>
    </div>
  </section>
</template>
