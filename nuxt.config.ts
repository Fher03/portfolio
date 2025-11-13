import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com",
          rel: "preconnect",
        },
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&family=Inconsolata:wght@200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  image: {
    provider: "none",
  },
  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/icon",
    "@nuxt/image",
  ],
});
