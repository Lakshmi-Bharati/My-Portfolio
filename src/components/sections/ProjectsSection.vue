<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '../../data/projects'

const router = useRouter()
const activeFilter = ref<string>('All')

const filtered = () => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.category === activeFilter.value)
}

function goToProject(id: string) {
  router.push(`/project/${id}`)
}
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="orb orb-proj" />
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          Projects
        </span>
        <h2 class="section-title">
          Things I've<br />
          <span class="grad-text">built &amp; shipped</span>
        </h2>
        <p class="section-subtitle">Real-world production projects from my experience — click any card to see full details.</p>
      </div>

    
      <!-- Projects grid -->
      <Transition name="fade" mode="out-in">
        <div class="projects-grid" :key="activeFilter">
          <article
            v-for="(p, pi) in filtered()"
            :key="p.id"
            class="glass-card project-card fade-in"
            :style="{ transitionDelay: pi * 80 + 'ms' }"
            @click="goToProject(p.id)"
          >
            <!-- Gradient accent bar -->
            <div class="card-accent" :style="{ background: p.gradient }" />

            <div class="card-body">
              <div class="card-top">
                <span class="proj-icon" :style="{ background: p.color + '20', color: p.color }">{{ p.icon }}</span>
                <span class="proj-category pill">{{ p.category }}</span>
              </div>

              <h3 class="proj-title">{{ p.title }}</h3>
              <p class="proj-desc">{{ p.description }}</p>

              <!-- Tech tags -->
              <div class="proj-tech">
                <span v-for="t in p.tech.slice(0, 4)" :key="t" class="pill">{{ t }}</span>
                <span v-if="p.tech.length > 4" class="pill pill-more">+{{ p.tech.length - 4 }}</span>
              </div>

              <!-- CTA Details Link -->
              <button class="expand-btn" aria-label="View Project Details">
                View Project Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </article>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.projects-section { overflow: hidden; }

.orb-proj {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%);
  top: 20%; left: -150px;
  animation-delay: 1s;
}

.section-header { text-align: center; margin-bottom: 2.5rem; }
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}
.section-subtitle { color: var(--color-text-muted); max-width: 520px; margin: 0 auto; }

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}
.filter-btn {
  padding: 0.4rem 1rem;
  border-radius: var(--radius-pill);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--dur-fast);
  background: transparent;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}
.filter-btn:hover { border-color: var(--color-primary); color: var(--color-primary-l); }
.filter-btn.active {
  background: linear-gradient(135deg, var(--color-primary), #8b5cf6);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 14px rgba(99,102,241,0.4);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.project-card {
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--dur-fast) var(--ease-smooth);
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  border-color: var(--color-border-hov);
}

.card-accent {
  height: 3px;
  border-radius: var(--radius-card) var(--radius-card) 0 0;
}

.card-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 0.75rem; }

.card-top { display: flex; align-items: center; justify-content: space-between; }

.proj-icon {
  width: 42px; height: 42px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.3rem;
}

.proj-category { font-size: 0.72rem; }

.proj-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text);
}

.proj-desc { font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.7; }

.proj-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto; margin-bottom: 0.5rem; }
.pill-more { background: rgba(255,255,255,0.06); color: var(--color-text-faint); border-color: var(--color-border); }

.expand-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  color: var(--color-primary-l);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: all var(--dur-fast);
  margin-top: 0.25rem;
}
.expand-btn:hover { color: var(--color-accent); }
.expand-btn svg { transition: transform var(--dur-fast); }
.expand-btn:hover svg { transform: translateX(2px); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
