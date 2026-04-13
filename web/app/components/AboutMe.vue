<template>
  <section aria-labelledby="about-heading" class="bg-surface-container-low py-32 px-8 overflow-hidden relative" id="about">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div class="lg:col-span-5 relative">
        <div class="aspect-[3/4] bg-surface-container-highest rounded-sm overflow-hidden relative z-10 shadow-2xl">
          <img 
            src="/profile.jpg" 
            alt="Retrato del desarrollador, joven sonriendo a la cámara" 
            class="w-full h-full object-cover grayscale" 
            loading="lazy"
          />
        </div>
        <!-- Aesthetic Background Text -->
        <div class="absolute -left-10 bottom-10 font-headline text-8xl font-black text-primary/5 select-none pointer-events-none z-0" aria-hidden="true">
          VUE JS
        </div>
      </div>
      <div class="lg:col-span-7">
        <p class="font-label text-primary font-bold tracking-[0.3em] mb-6 uppercase">Sobre Mí</p>
        <!-- SEO: This is the second heading level on the page -->
        <h2 id="about-heading" class="font-headline text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Enfocado en resolver problemas complejos mediante la arquitectura Frontend.
        </h2>
        <div class="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
          <p>
            No solo escribo código; diseño sistemas. Mi enfoque se centra en cómo la tecnología puede generar valor real de negocio mediante la eficiencia operativa y la satisfacción del usuario final.
          </p>
          <p>
            A lo largo de mi carrera, he perfeccionado un <span class="text-on-surface font-semibold underline decoration-primary decoration-2 underline-offset-4">'Super Poder'</span>: La atención obsesiva al detalle y la capacidad de escalar aplicaciones desde prototipos rápidos hasta plataformas empresariales robustas sin sacrificar el rendimiento.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12 border-t border-outline-variant/20 pt-12">
          <div>
            <span class="block font-headline text-3xl font-bold text-primary mb-2">1+</span>
            <span class="font-label text-xs uppercase tracking-widest">Años de experiencia</span>
          </div>
          <div>
            <span class="block font-headline text-3xl font-bold text-primary mb-2">3+</span>
            <span class="font-label text-xs uppercase tracking-widest">Proyectos entregados</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
