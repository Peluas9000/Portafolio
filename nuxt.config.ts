export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap' }
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com?plugins=forms,container-queries' },
        {
          innerHTML: `
            tailwind.config = {
              darkMode: "class",
              theme: {
                extend: {
                  colors: {
                    "primary": "#4edea3",
                    "background": "#0c1324",
                    // ... resto de colores
                  }
                }
              }
            }
          `
        }
      ]
    }
  }
})