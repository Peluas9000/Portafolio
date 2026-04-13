// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Enable tailwind module
  modules: ['@nuxtjs/tailwindcss'],

  // Nuxt app configuration for SEO and external resources
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
        class: 'dark' // from the original html
      },
      title: 'ENGINEER_CORE | Vue 3 & Nuxt 4 Specialist',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'Desarrollador Full Stack enfocado en eficiencia: integrando IA y arquitecturas modernas para resolver problemas reales.' },
        { name: 'robots', content: 'index, follow' } // SEO: Make sure page is indexed
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ]
    }
  },

  // Add global CSS
  css: ['~/assets/css/main.css'],

  // Use Nuxt 4 standard future behavior (if needed, but usually automatically handled in newer rc/alphas)
  future: {
    compatibilityVersion: 4,
  },
})
