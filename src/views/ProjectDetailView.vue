<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

function goBack() {
  router.push('/#projects')
}
</script>

<template>
  <div v-if="project" class="project-detail-view fade-in-up">
    <!-- Accent glow based on project colors -->
    <div class="glow-orb" :style="{ background: project.gradient }" />

    <div class="container detail-container">
      <!-- Back navigation -->
      <button class="back-link btn btn-outline" @click="goBack">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to Projects
      </button>

      <div class="detail-grid">
        <!-- Left: Project Core details -->
        <div class="detail-left">
          <div class="proj-header">
            <span class="proj-icon-large" :style="{ background: project.color + '15', color: project.color }">
              {{ project.icon }}
            </span>
            <div>
              <span class="category-tag pill">{{ project.category }}</span>
              <h1 class="proj-title-large grad-text">{{ project.title }}</h1>
            </div>
          </div>

          <div class="glass-card detail-card main-desc">
            <h2>About the Project</h2>
            <p>{{ project.longDesc }}</p>
          </div>

          <div class="tech-section">
            <h3 class="section-subtitle-small">Technologies Used</h3>
            <div class="tech-tags">
              <span v-for="t in project.tech" :key="t" class="pill tech-pill">{{ t }}</span>
            </div>
          </div>

          <!-- Dynamic Links -->
          <div v-if="project.links.length" class="links-section">
            <h3 class="section-subtitle-small">Live Project Links</h3>
            <div class="links-grid">
              <a
                v-for="link in project.links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener"
                class="btn btn-primary live-link"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Key Highlights checklist -->
        <div class="detail-right">
          <div class="glass-card detail-card highlights-card">
            <h2>Key Implementation Highlights</h2>
            <ul class="highlights-list">
              <li v-for="(h, i) in project.highlights" :key="i" class="highlight-item">
                <span class="check-box" :style="{ background: project.color + '15', color: project.color }">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span class="highlight-text">{{ h }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container not-found">
    <h2>Project not found</h2>
    <button class="btn btn-primary" @click="router.push('/')">Go Home</button>
  </div>
</template>

<style scoped>
.project-detail-view {
  min-height: 90vh;
  padding: 8rem 0 4rem;
  position: relative;
  overflow: hidden;
}

/* Entry animation */
.fade-in-up {
  animation: fadeInUp 0.6s var(--ease-smooth) forwards;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glow-orb {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
}

.detail-container {
  position: relative;
  z-index: 1;
}

.back-link {
  margin-bottom: 2.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.88rem;
  transition: all var(--dur-fast) var(--ease-smooth);
}
.back-link:hover {
  transform: translateX(-4px);
}

.detail-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: start;
}

.proj-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.proj-icon-large {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.category-tag {
  font-size: 0.78rem;
  background: rgba(255,255,255,0.04);
  border-color: var(--color-border);
  margin-bottom: 0.5rem;
  display: inline-block;
}

.proj-title-large {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.detail-card {
  padding: 2.5rem;
  margin-bottom: 2rem;
}
.detail-card h2 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: var(--color-text);
  letter-spacing: -0.01em;
}
.detail-card p {
  color: var(--color-text-muted);
  line-height: 1.8;
  font-size: 1.05rem;
}

.tech-section {
  margin-bottom: 2.5rem;
}

.section-subtitle-small {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-faint);
  margin-bottom: 1rem;
  font-weight: 700;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.tech-pill {
  font-size: 0.85rem;
  padding: 0.45rem 1.1rem;
  background: rgba(255,255,255,0.02);
  border-color: var(--color-border);
  transition: all var(--dur-fast);
}
.tech-pill:hover {
  border-color: var(--color-border-hov);
  background: rgba(255,255,255,0.06);
}

.links-section {
  margin-bottom: 2rem;
}
.links-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.live-link {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.9rem;
  padding: 0.65rem 1.25rem;
}

/* Right checklist */
.highlights-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-border);
}
.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  list-style: none;
  padding: 0;
}
.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.check-box {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}
.highlight-text {
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.not-found {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
}

@media (max-width: 900px) {
  .project-detail-view {
    padding-top: 6rem;
  }
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .detail-card {
    padding: 1.75rem;
  }
}
</style>
