<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import TimelineSection from '../components/sections/TimelineSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import FooterSection from '../components/sections/FooterSection.vue'
import { onMounted } from 'vue'

// Intersection Observer for fade-in animations
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  )

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="home-view">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <TimelineSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<style scoped>
.home-view {
  position: relative;
}
</style>
