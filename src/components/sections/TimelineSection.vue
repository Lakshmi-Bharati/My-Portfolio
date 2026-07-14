<script setup lang="ts">
interface TimelineEvent {
  year: string
  period: string
  title: string
  org: string
  location: string
  desc: string
  tags: string[]
  color: string
  side: 'left' | 'right'
  badge?: string
}

// Sourced directly from resume Experience & Education sections
const timeline: TimelineEvent[] = [
  {
    year: 'Jul 2025',
    period: 'Jul 2025 – Present · 1yr 1mo',
    title: 'Full Stack Developer',
    org: 'Katalyst Consulting Services Pty Ltd',
    location: 'Australia',
    desc: 'Architected a multi-tenant Headless CMS (Directus + PostgreSQL) serving 5 corporate websites from a single instance, reducing DB redundancy by 80%. Built VTiger CRM modules (Complaints App, Audit Report App) and the Kokumi manufacturing platform with BOM Creator, Cypress E2E tests, and state management.',
    tags: ['Vue.js', 'Directus', 'PostgreSQL', 'Docker', 'VTiger CRM', 'Cypress'],
    color: '#6366f1',
    side: 'right',
    badge: 'Current'
  },
  {
    year: 'Dec 2024',
    period: 'Dec 2024 – Jul 2025 · 8 mos',
    title: 'React JS + Java Intern',
    org: 'Samvav Labs',
    location: 'Kolkata, West Bengal',
    desc: 'Developed a real-time collaborative sourcing & procurement platform connecting Buyers, Suppliers, and Logistics. Built Spring Boot backend with JPA/Hibernate, implemented WebSocket-based real-time rank updates, RFI/RFP modules, and lot-level bid management. Built modular React.js frontend with form validations.',
    tags: ['React.js', 'Java', 'Spring Boot', 'Hibernate', 'MySQL', 'WebSocket', 'REST API'],
    color: '#06b6d4',
    side: 'left',
  },
  {
    year: 'Aug 2023',
    period: 'Aug 2023 – Aug 2024',
    title: 'Full Stack Java Developer',
    org: 'Seven Mentor and Training Pvt Ltd',
    location: 'Pune',
    desc: 'Completed an intensive Full Stack Java Development certification program covering Core Java, Advanced Java, Spring Boot, Spring Security, Hibernate, JSP/Servlet, REST APIs, MySQL, and React.js.',
    tags: ['Core Java', 'Spring Boot', 'Hibernate', 'MySQL', 'React.js', 'REST API'],
    color: '#f59e0b',
    side: 'right',
    badge: 'Certificate'
  },
  {
    year: 'May 2017',
    period: 'May 2017 – Apr 2020',
    title: 'B.E. (Electronics & Telecommunication)',
    org: 'Savitribai Phule Pune University',
    location: 'Pune',
    desc: 'Bachelor of Engineering in Electronics & Telecommunication. CGPA: 7.9 / 10.',
    tags: ['Electronics', 'Telecommunication', 'CGPA 7.9/10'],
    color: '#10b981',
    side: 'left',
    badge: 'Education'
  },
  {
    year: 'May 2014',
    period: 'May 2014 – Apr 2017',
    title: 'Diploma (Electronics & Telecommunication)',
    org: 'MSBTE',
    location: 'Maharashtra',
    desc: 'Diploma in Electronics & Telecommunication. Percentage: 81.18% / 100%.',
    tags: ['Electronics', 'Diploma', '81.18%'],
    color: '#ec4899',
    side: 'right',
    badge: 'Education'
  },
]
</script>

<template>
  <section id="timeline" class="section timeline-section">
    <div class="orb orb-timeline" />
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Experience & Education
        </span>
        <h2 class="section-title">
          My professional<br />
          <span class="grad-text">journey so far</span>
        </h2>
        <p class="section-subtitle">
         ~2 yrs of hands-on experience across full-stack Java, Vue.js, and CRM development.
        </p>
      </div>

      <div class="timeline-track">
        <div class="timeline-line" />

        <div
          v-for="(event, i) in timeline"
          :key="i"
          class="timeline-row"
          :class="event.side"
        >
          <div class="timeline-spacer" />

          <div class="timeline-dot-wrapper">
            <div class="timeline-dot" :style="{ background: event.color, boxShadow: `0 0 0 4px ${event.color}33` }" />
          </div>

          <div class="glass-card timeline-card fade-in" :style="{ transitionDelay: i * 100 + 'ms' }">
            <div class="tc-top">
              <div class="tc-year" :style="{ color: event.color }">{{ event.year }}</div>
              <span v-if="event.badge" class="tc-badge" :style="{ background: event.color + '20', color: event.color, borderColor: event.color + '40' }">{{ event.badge }}</span>
            </div>
            <h3 class="tc-title">{{ event.title }}</h3>
            <div class="tc-org">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              {{ event.org }}
            </div>
            <div class="tc-period">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {{ event.period }} · {{ event.location }}
            </div>
            <p class="tc-desc">{{ event.desc }}</p>
            <div class="tc-tags">
              <span v-for="t in event.tags" :key="t" class="pill">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section { overflow: hidden; }

.orb-timeline {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%);
  bottom: 0; right: -100px;
  animation-delay: 5s;
}

.section-header { text-align: center; margin-bottom: 4rem; }
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}
.section-subtitle { color: var(--color-text-muted); max-width: 500px; margin: 0 auto; }

.timeline-track {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0; bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent, var(--color-border) 10%, var(--color-border) 90%, transparent);
}

.timeline-row {
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  align-items: center;
  gap: 1.5rem;
  position: relative;
}

.timeline-dot-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
}

.timeline-card { padding: 1.5rem; }

.timeline-row.left .timeline-card { grid-column: 1; grid-row: 1; }
.timeline-row.left .timeline-dot-wrapper { grid-column: 2; grid-row: 1; }
.timeline-row.left .timeline-spacer { grid-column: 3; grid-row: 1; }

.timeline-row.right .timeline-spacer { grid-column: 1; grid-row: 1; }
.timeline-row.right .timeline-dot-wrapper { grid-column: 2; grid-row: 1; }
.timeline-row.right .timeline-card { grid-column: 3; grid-row: 1; }

.tc-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35rem;
}
.tc-year {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.tc-badge {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
  border: 1px solid;
}
.tc-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.tc-org {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-weight: 500;
  margin-bottom: 0.2rem;
}
.tc-org svg { color: var(--color-accent); flex-shrink: 0; }
.tc-period {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: var(--color-text-faint);
  margin-bottom: 0.75rem;
}
.tc-period svg { flex-shrink: 0; }
.tc-desc { font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 0.75rem; }
.tc-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

@media (max-width: 700px) {
  .timeline-line { left: 16px; transform: none; }
  .timeline-row,
  .timeline-row.left,
  .timeline-row.right {
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-template-rows: auto;
  }
  .timeline-row .timeline-dot-wrapper,
  .timeline-row.left .timeline-dot-wrapper,
  .timeline-row.right .timeline-dot-wrapper { grid-column: 1; grid-row: 1; }
  .timeline-row .timeline-card,
  .timeline-row.left .timeline-card,
  .timeline-row.right .timeline-card { grid-column: 2; grid-row: 1; }
  .timeline-row .timeline-spacer,
  .timeline-row.left .timeline-spacer,
  .timeline-row.right .timeline-spacer { display: none; }
}
</style>
