<script setup lang="ts">
const highlights = [
  { icon: '🚀', label: 'Experience', value: '~2 yrs' },
  { icon: '⚡', label: 'Sites Consolidated', value: '5→1' },
  { icon: '🛠️', label: 'Tech Domains', value: '10+' },
  { icon: '🎓', label: 'CGPA', value: '7.9/10' },
]

function scrollTo(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="about" class="section about-section">
    <div class="orb orb-about" />
    <div class="container about-grid">
      <!-- Left: Text -->
      <div class="about-text">
        <span class="section-label fade-in">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="7" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
          About Me
        </span>

        <h2 class="about-heading fade-in">
          Building the web,<br />
          <span class="grad-text">one layer at a time</span>
        </h2>

        <p class="about-para fade-in">
          I'm a <strong>Full Stack Developer</strong> at <strong>Katalyst Consulting Services Pty Ltd</strong>
          (Australia), with ~2 years of hands-on experience across Java/Spring Boot and Vue.js/React ecosystems.
        </p>
        <p class="about-para fade-in">
          I architected a <strong>single-instance Headless CMS platform (Directus + PostgreSQL)</strong> that
          dynamically serves 5 distinct corporate websites — reducing database redundancy by 80%. I've built
          real-time collaborative procurement platforms with <strong>WebSockets &amp; Spring Boot</strong>, and
          shipped CRM automation modules inside <strong>VTiger CRM</strong>.
        </p>
        <p class="about-para fade-in">
          Education: <strong>B.E. (E&amp;TC)</strong> from Savitribai Phule University (CGPA 7.9/10).
          Certified <strong>Full Stack Java Developer</strong> — Seven Mentors &amp; Training Pvt Ltd, Pune (Aug 2023–24).
        </p>
        <p class="about-para fade-in">
          Languages I speak: English, Marathi, Hindi.
        </p>

        <div class="about-actions fade-in">
          <a href="#projects" class="btn btn-primary" @click.prevent="scrollTo('#projects')">
            View My Projects
          </a>
          <a href="mailto:lakshmibharatijuly96@gmail.com" class="btn btn-outline">
            lakshmibharatijuly96@gmail.com
          </a>
        </div>
      </div>

      <!-- Right: Stats + card -->
      <div class="about-right">
        <div class="stats-grid fade-in">
          <div v-for="h in highlights" :key="h.label" class="glass-card stat-card">
            <span class="stat-icon">{{ h.icon }}</span>
            <span class="stat-value">{{ h.value }}</span>
            <span class="stat-label">{{ h.label }}</span>
          </div>
        </div>

        <!-- Identity card -->
        <div class="glass-card id-card fade-in">
          <div class="id-header">
            <div class="id-avatar">LB</div>
            <div>
              <div class="id-name">Lakshmi Bharati</div>
              <div class="id-role">Full Stack Developer</div>
            </div>
          </div>
          <div class="id-details">
            <div class="id-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Nashik, Maharashtra, India
            </div>
            <div class="id-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              Katalyst Consulting Services Pty Ltd, Australia
            </div>
            <div class="id-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              +91 90965 96080
            </div>
            <div class="id-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              Jul 2025 – Present at KCS
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section { overflow: hidden; }

.orb-about {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%);
  top: 0; left: -150px;
  animation-delay: 2s;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  position: relative;
  z-index: 1;
}

.about-heading {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.about-para {
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 0.98rem;
}
.about-para strong { color: var(--color-text); font-weight: 600; }

.about-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }

.about-right { display: flex; flex-direction: column; gap: 1.5rem; }

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-card {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  cursor: default;
}
.stat-icon { font-size: 1.5rem; }
.stat-value {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary-l);
  line-height: 1;
}
.stat-label { font-size: 0.78rem; color: var(--color-text-muted); font-weight: 500; }

.id-card { padding: 1.25rem; }

.id-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }

.id-avatar {
  width: 48px; height: 48px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: 700; font-size: 1rem;
  color: #fff; flex-shrink: 0;
}

.id-name { font-weight: 600; font-size: 0.95rem; }
.id-role { font-size: 0.8rem; color: var(--color-accent); margin-top: 2px; }

.id-details { display: flex; flex-direction: column; gap: 0.6rem; }
.id-row {
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.82rem; color: var(--color-text-muted);
}
.id-row svg { flex-shrink: 0; color: var(--color-primary-l); }

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
