<script setup lang="ts">
interface Skill {
  name: string
  level: number
  color: string
}

interface Category {
  title: string
  icon: string
  skills: Skill[]
}

// Sourced directly from resume's Technical Skills section
const categories: Category[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Vue.js', level: 92, color: '#42d392' },
      { name: 'React.js', level: 94, color: '#61dafb' },
      { name: 'Next.js', level: 70, color: '#e2e8f0' },
      { name: 'Tailwind CSS / DaisyUI', level: 88, color: '#38bdf8' },
      { name: 'HTML / CSS / Bootstrap / MUI', level: 93, color: '#e34f26' },
      { name: 'JavaScript / jQuery', level: 88, color: '#f7df1e' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Java (Core + Advanced)', level: 80, color: '#f89820' },
      { name: 'Spring Boot / Spring MVC', level: 78, color: '#6db33f' },
      { name: 'Spring Security / Hibernate', level: 72, color: '#5c9a3a' },
      { name: 'REST API / WebSocket', level: 82, color: '#ff6b35' },
      { name: 'JSP / Servlet', level: 70, color: '#e8790e' },
    ],
  },
  {
    title: 'CMS & Databases',
    icon: '🗄️',
    skills: [
      { name: 'Directus (Headless CMS)', level: 90, color: '#6644ff' },
      { name: 'Payload CMS', level: 65, color: '#7c3aed' },
      { name: 'VTiger CRM', level: 82, color: '#e05c00' },
      { name: 'PostgreSQL', level: 80, color: '#336791' },
      { name: 'MySQL / MariaDB', level: 78, color: '#4479a1' },
      { name: 'ERPNext / Frappe', level: 65, color: '#0089ff' },
    ],
  },
  {
    title: 'DevOps & Other',
    icon: '🛠️',
    skills: [
      { name: 'Docker', level: 75, color: '#0db7ed' },
      { name: 'Git / GitHub', level: 88, color: '#f05032' },
      // { name: 'Linux CLI', level: 70, color: '#fcc624' },
      { name: 'Vite', level: 85, color: '#bd34fe' },
      { name: 'Cypress E2E Testing', level: 72, color: '#04c38e' },
      { name: 'State Management', level: 80, color: '#ffd859' },
    ],
  },
]
</script>

<template>
  <section id="skills" class="section skills-section">
    <div class="orb orb-skills" />
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Skills & Expertise
        </span>
        <h2 class="section-title">
          Tools I wield<br />
          <span class="grad-text">with confidence</span>
        </h2>
        <p class="section-subtitle">
          From full-stack Java backends to Vue.js frontends — a broad stack built through real production work.
        </p>
      </div>

      <div class="categories-grid">
        <div
          v-for="(cat, ci) in categories"
          :key="cat.title"
          class="glass-card skill-card fade-in"
          :style="{ transitionDelay: ci * 100 + 'ms' }"
        >
          <div class="skill-card-header">
            <span class="cat-icon">{{ cat.icon }}</span>
            <h3 class="cat-title">{{ cat.title }}</h3>
          </div>

          <ul class="skill-list">
            <li v-for="skill in cat.skills" :key="skill.name" class="skill-item">
              <div class="skill-meta">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-pct">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-fill"
                  :style="{ width: skill.level + '%', background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Soft skills -->
      <div class="soft-skills fade-in">
        <span class="section-label" style="margin-bottom:0">
          Soft Skills
        </span>
        <div class="soft-pills">
          <span v-for="s in ['Communication', 'Adaptability', 'Creativity', 'Teamwork']" :key="s" class="pill">{{ s }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section { overflow: hidden; }

.orb-skills {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%);
  top: 50%; right: -150px;
  animation-delay: 3s;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}
.section-subtitle {
  color: var(--color-text-muted);
  max-width: 560px;
  margin: 0 auto;
  font-size: 1rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.skill-card { padding: 1.75rem; position: relative; z-index: 1; }

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.cat-icon { font-size: 1.4rem; }
.cat-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text);
}

.skill-list { display: flex; flex-direction: column; gap: 1rem; }

.skill-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.84rem;
}
.skill-name { font-weight: 500; color: var(--color-text); }
.skill-pct { color: var(--color-text-muted); font-size: 0.78rem; }

.skill-bar {
  height: 5px;
  background: rgba(255,255,255,0.06);
  border-radius: var(--radius-pill);
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width 1s var(--ease-smooth);
}

/* Soft skills */
.soft-skills {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
}
.soft-pills { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.soft-pills .pill {
  font-size: 0.85rem;
  padding: 0.4rem 1rem;
}

@media (max-width: 768px) {
  .categories-grid { grid-template-columns: 1fr; }
}
</style>
