<template>
  <section aria-labelledby="projects-heading" class="py-32 px-8 max-w-7xl mx-auto" id="projects">
    <div class="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h2 id="projects-heading" class="font-headline text-4xl font-bold mb-4">Proyectos Seleccionados</h2>
        <p class="text-on-surface-variant max-w-xl">Una mirada a los desafíos técnicos resueltos mediante arquitectura moderna.</p>
      </div>
      <div class="h-[2px] flex-grow bg-outline-variant/20 mx-12 hidden md:block" aria-hidden="true"></div>
      <span class="font-label text-primary font-bold" aria-live="polite">01 / 03</span>
    </div>
    
    <div 
      class="flex overflow-x-auto gap-8 pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory"
      role="list"
      aria-label="Lista de proyectos"
    >
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="index"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :image-alt="project.imageAlt"
        :link="project.link"
        :tags="project.tags"
        class="snap-start"
        role="listitem"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Gastos Go',
    description: 'Una interfaz con registro incluido de tu gasto personal mensual con gráficos, descarga de facturas y más.',
    image: '/gastosGo.jpg',
    imageAlt: 'Captura de pantalla de la aplicación Gastos Go mostrando gráficos de gastos',
    link: 'https://github.com/Peluas9000/GastosGo',
    tags: ['Kotlin', 'SQLite', 'Android Studio']
  },
  {
    title: 'Flux E-commerce',
    description: 'Implementación de SSR avanzado y estrategias de hidratación selectiva para alto rendimiento.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBg0z2wz7Mnplqut7PwABoltUaGgAX477n5YhVekLW8iqnh_40tvV9p7A8RI5ie6VzUU_0sWuKqIl1L9z8t7ubKcsZOtq1kMM1kq3glRSnH5FOpvyPgsC6bkVK-vK_MjhcW9C1FHzvIKBv2Tvy9-o9IR82qb4-MMGfiM8wIZKLYe-dJ3Z7j9IcCwpcJB9pHFEQDpYpF-nHmkPmarwNDV7y6wkCkQxY8NoG9lchnsW-gRc91qGYTapj-V8pWeEBFnZK_YhmFqv9J-pl',
    imageAlt: 'Diseño de interfaz de usuario de la tienda en línea Flux optimizada para conversiones móviles',
    link: '#',
    tags: ['VUE 3', 'TYPESCRIPT']
  },
  {
    title: 'Core Design System',
    description: 'Librería de componentes escalable utilizando Tailwind y Headless UI para toda la suite de apps.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVG-SJp2docnwVL5p_2lDDaOK7CMtqjnGW68M2sjoH8KrqyTVfmXxDQDpB2FpAGos-SQtFwQfAxsHMPiq3u6CeD5EhQjS0hkmvlVUBd9hVl8FQNLvAH5lGAeyzDUXwwQngRSa-wbxF6ALX035VbHjF7S8MaqSuO5lw1TAkcux90kOAVgG5VgwTPto0lz71yFZWb9IY5O3Uxg9ns4l_xMHHgbIo5N5JBx10qdFREkxffJX1MsIys6pU-MvLwf1O3AQHZNln63hFWC8t',
    imageAlt: 'Visualización del código fuente y documentación interactiva del Core Design System en Storybook',
    link: '#',
    tags: ['STORYBOOK', 'UTILITY-FIRST']
  }
]
</script>
