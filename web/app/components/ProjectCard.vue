<template>
  <article class="min-w-[320px] md:min-w-[400px] group flex-shrink-0 relative">
    <!-- Clickable card container acting as a link -->
    <a :href="link" class="block h-full glass-card p-6 flex flex-col transition-all duration-500 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:-translate-y-2" :aria-label="`Ver detalles del proyecto ${title}`">
      <div class="relative overflow-hidden mb-8 aspect-video rounded-sm">
        <img 
          :src="image" 
          :alt="imageAlt" 
          class="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
          loading="lazy" 
        />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-start">
          <h3 class="font-headline text-2xl font-bold">{{ title }}</h3>
          <span class="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
        </div>
        <p class="text-on-surface-variant line-clamp-2">{{ description }}</p>
        <div class="flex gap-2 flex-wrap mt-auto">
          <span 
            v-for="tag in tags" 
            :key="tag" 
            class="bg-surface-container-high text-[0.65rem] px-2 py-1 font-bold rounded-sm tracking-wider uppercase"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </a>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  imageAlt: string
  link: string
  tags: string[]
}>()
</script>
