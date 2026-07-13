<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import { RouterView } from 'vue-router'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div id="portfolio-root">
    <ParticleBackground />
    <NavBar :scrolled="scrolled" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#portfolio-root {
  position: relative;
  min-height: 100vh;
}
main {
  position: relative;
  z-index: 1;
}
</style>
