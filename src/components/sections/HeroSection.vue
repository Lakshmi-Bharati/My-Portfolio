<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const titles = [
  'Full Stack Developer',
  'Vue.js & React Developer',
  'Spring Boot Developer',
  'Backend/Java Developer',
  'Web Developer',
]

const currentTitle = ref(0)
const displayed = ref('')
const isDeleting = ref(false)

let typeTimer: ReturnType<typeof setTimeout>

function typeEffect() {
  const target = titles[currentTitle.value]
  if (!isDeleting.value) {
    displayed.value = target.slice(0, displayed.value.length + 1)
    if (displayed.value === target) {
      isDeleting.value = true
      typeTimer = setTimeout(typeEffect, 2000)
      return
    }
  } else {
    displayed.value = target.slice(0, displayed.value.length - 1)
    if (displayed.value === '') {
      isDeleting.value = false
      currentTitle.value = (currentTitle.value + 1) % titles.length
    }
  }
  typeTimer = setTimeout(typeEffect, isDeleting.value ? 50 : 90)
}

onMounted(() => {
  typeTimer = setTimeout(typeEffect, 600)
})

onUnmounted(() => {
  clearTimeout(typeTimer)
})

function scrollTo(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero-section section">
    <!-- Gradient orbs -->
    <div class="orb orb-1" />
    <div class="orb orb-2" />
    <div class="orb orb-3" />

    <div class="container hero-content">
      <div class="hero-badge fade-in">
        <span class="dot" />
        Available for opportunities
      </div>

      <h1 class="hero-heading fade-in">
        Hi, I'm<br />
        <span class="grad-text">Lakshmi Bharati</span>
      </h1>

      <p class="hero-role fade-in">
        <span class="type-text">{{ displayed }}</span>
        <span class="cursor">|</span>
      </p>

      <p class="hero-desc fade-in">
        Full Stack Developer with ~2 years of experience across Java/Spring Boot and Vue.js/React ecosystems.
        I've consolidated 5 corporate websites into a single multi-tenant headless CMS, built real-time procurement
        platforms with WebSockets, and shipped CRM automation modules at scale.
      </p>

      <div class="hero-actions fade-in">
        <a href="#projects" class="btn btn-primary" @click.prevent="scrollTo('#projects')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          View Projects
        </a>
        <a href="mailto:lakshmibharatijuly96@gmail.com" class="btn btn-outline">
          Get in Touch
        </a>
      </div>

      <!-- Tech stack pills -->
      <div class="hero-stack fade-in">
        <span class="stack-label">Tech I work with:</span>
        <div class="stack-pills">
          <span v-for="tech in ['Vue.js', 'React.js', 'Spring Boot', 'Advanced Java', 'Core Java', 'Directus', 'VTiger CRM', 'ERPNext', 'Frappe Framework', 'MySQL','HTML', 'CSS', 'JavaScript','Rest API','JPA/Hibernate', 'Bootstrap']" :key="tech" class="pill">{{ tech }}</span>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-hint fade-in" aria-hidden="true">
        <span />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 6rem;
}

/* Orbs */
.orb-1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(99,102,241,0.5), transparent 70%); top: -120px; right: -100px; animation-delay: 0s; }
.orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(6,182,212,0.35), transparent 70%); bottom: 0; left: -80px; animation-delay: 4s; }
.orb-3 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(236,72,153,0.25), transparent 70%); top: 30%; left: 40%; animation-delay: 8s; }

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 820px;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  background: rgba(6,182,212,0.08);
  border: 1px solid rgba(6,182,212,0.25);
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-accent);
  margin-bottom: 2rem;
  transition-delay: 0s;
}
.dot {
  width: 8px;
  height: 8px;
  background: #22d3ee;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(34,211,238,0.25);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgba(34,211,238,0.25); }
  50%       { box-shadow: 0 0 0 6px rgba(34,211,238,0.1); }
}

/* Heading */
.hero-heading {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin-bottom: 1rem;
}

/* Typing */
.hero-role {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 500;
  color: var(--color-primary-l);
  margin-bottom: 1.5rem;
  min-height: 2rem;
}
.cursor {
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

/* Desc */
.hero-desc {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  max-width: 600px;
  margin-bottom: 2.5rem;
}

/* Actions */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

/* Stack */
.hero-stack {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.stack-label {
  font-size: 0.8rem;
  color: var(--color-text-faint);
  font-weight: 500;
  letter-spacing: 0.05em;
}
.stack-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Scroll hint */
.scroll-hint {
  margin-top: 3rem;
}
.scroll-hint span {
  display: block;
  width: 22px;
  height: 36px;
  border: 2px solid var(--color-border-hov);
  border-radius: 12px;
  position: relative;
}
.scroll-hint span::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--color-primary-l);
  border-radius: 2px;
  animation: scroll-dot 2s ease-in-out infinite;
}
@keyframes scroll-dot {
  0%   { opacity: 1; transform: translateX(-50%) translateY(0); }
  80%  { opacity: 0; transform: translateX(-50%) translateY(12px); }
  100% { opacity: 0; transform: translateX(-50%) translateY(12px); }
}

/* Stagger delays for fade-in */
.hero-badge   { transition-delay: 0ms; }
.hero-heading { transition-delay: 120ms; }
.hero-role    { transition-delay: 220ms; }
.hero-desc    { transition-delay: 320ms; }
.hero-actions { transition-delay: 420ms; }
.hero-stack   { transition-delay: 520ms; }
</style>
