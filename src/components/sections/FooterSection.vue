<script setup lang="ts">
const year = new Date().getFullYear()

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollTo(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer-section">
    <div class="footer-gradient" />
    <div class="container footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-initials">LB</span>
            <span class="logo-name">Lakshmi Bharati</span>
          </div>
          <p class="footer-tagline">
            Full Stack Developer · Nashik, Maharashtra, India
          </p>
          <!-- Direct contact in footer -->
          <div class="footer-contact">
            <a href="mailto:lakshmibharatijuly96@gmail.com" class="footer-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>lakshmibharatijuly96@gmail.com</span>
            </a>
            <a href="tel:+919096596080" class="footer-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              <span>+91 90965 96080</span>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <div class="link-group-title">Navigate</div>
            <a v-for="l in ['About', 'Skills', 'Projects', 'Timeline', 'Contact']" :key="l"
               :href="'#' + l.toLowerCase()"
               class="footer-link"
               @click.prevent="scrollTo('#' + l.toLowerCase())"
            >
              <span class="link-bullet">→</span>
              {{ l }}
            </a>
          </div>
          <div class="link-group">
            <div class="link-group-title">Links</div>
            <a href="https://www.linkedin.com/in/lakshmibharati1996/" target="_blank" rel="noopener" class="footer-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/Lakshmi-Bharati?tab=repositories" target="_blank" rel="noopener" class="footer-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">
          © {{ year }} Lakshmi Bharati · Software Developer . B.E. (E&TC) 
        </p>
        <button class="back-top-btn" @click="scrollTop" aria-label="Back to top">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
          Back to top
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.06) 0%, transparent 60%),
              linear-gradient(to bottom, var(--color-bg) 0%, #05080e 100%);
  padding: 5rem 0 2.5rem;
  overflow: hidden;
}

/* Glowing top edge line */
.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  width: 80%;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-primary) 30%, var(--color-accent) 70%, transparent);
  opacity: 0.45;
  pointer-events: none;
}

.footer-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 10% 80%, rgba(6, 182, 212, 0.03) 0%, transparent 40%),
              radial-gradient(circle at 90% 20%, rgba(236, 72, 153, 0.02) 0%, transparent 40%);
  pointer-events: none;
}

.footer-inner { position: relative; z-index: 1; }

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

.footer-brand { max-width: 340px; }

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.9rem;
}

.logo-initials {
  width: 38px; height: 38px;
  border-radius: 9px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 0.9rem;
  font-weight: 700; color: #fff;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.2);
}
.logo-name { font-family: var(--font-display); font-weight: 600; font-size: 1.05rem; letter-spacing: -0.01em; }

.footer-tagline { font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 1.25rem; }

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.25rem;
}
.footer-contact-link {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all var(--dur-fast) var(--ease-smooth);
  padding: 0.5rem 0.9rem;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  width: fit-content;
  backdrop-filter: blur(8px);
}
.footer-contact-link:hover {
  color: var(--color-primary-l);
  border-color: rgba(99, 102, 241, 0.35);
  background: rgba(99, 102, 241, 0.06);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
}
.footer-contact-link svg { flex-shrink: 0; }

.footer-links {
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
}

.link-group { display: flex; flex-direction: column; gap: 0.8rem; }
.link-group-title { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-faint); margin-bottom: 0.5rem; }

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--color-text-muted);
  transition: all var(--dur-fast) var(--ease-smooth);
  text-decoration: none;
}
.footer-link:hover {
  color: var(--color-text);
  transform: translateX(4px);
}
.link-bullet {
  font-size: 0.8rem;
  color: var(--color-primary);
  opacity: 0;
  transition: all var(--dur-fast) var(--ease-smooth);
  transform: translateX(-4px);
}
.footer-link:hover .link-bullet {
  opacity: 1;
  transform: translateX(0);
}
.social-icon {
  color: var(--color-text-muted);
  transition: color var(--dur-fast);
}
.footer-link:hover .social-icon {
  color: var(--color-primary-l);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  flex-wrap: wrap;
  margin-top: 1rem;
}

.footer-copy { font-size: 0.8rem; color: var(--color-text-faint); line-height: 1.6; }

.back-top-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  padding: 0.5rem 1.1rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all var(--dur-fast) var(--ease-smooth);
}
.back-top-btn:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--color-primary);
  color: var(--color-primary-l);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer-top { flex-direction: column; gap: 2.5rem; }
  .footer-links { gap: 3rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
</style>
