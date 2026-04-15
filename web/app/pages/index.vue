<template>
  <div id="top" class="min-h-screen bg-background relative flex flex-col">
    <!-- A11y Skip Link: allows keyboard users to bypass nav -->
    <a href="#main-content" class="skip-link">
      Saltar al contenido principal
    </a>

    <!-- Top Navigation -->
    <AppHeader />

    <!-- Main Page Content -->
    <main
      id="main-content"
      class="pt-24 flex-grow focus:outline-none"
      tabindex="-1"
    >
      <HeroSection />
      <AboutMe />
      <TechStack />
      <ProjectGallery />
    </main>

    <!-- Global Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
//SEO Meta configuration utilizing Nuxt composable (overriding/augmenting config defaults if needed)
useHead({
  title: 'ENGINEER_CORE | Vue 3 & Nuxt 4 Specialist',
  meta: [
    {
      name: 'description',
      content: 'Desarrollador Full Stack enfocado en eficiencia: integrando IA y arquitecturas modernas para resolver problemas reales.'
    }
  ]
})
</script>
