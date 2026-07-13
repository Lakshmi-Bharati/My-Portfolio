<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineProps<{ scrolled: boolean }>()

const menuOpen = ref(false)
const route = useRoute()
const router = useRouter()

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact',  href: '#contact' },
]

async function scrollTo(href: string) {
  menuOpen.value = false
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  } else {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="nav-wrapper" :class="{ scrolled }">
    <nav class="container nav-inner">
      <!-- Logo -->
      <a href="#hero" class="nav-logo" @click.prevent="scrollTo('#hero')">
        <span class="logo-initials">LB</span>
        <span class="logo-name">Lakshmi Bharati</span>
      </a>

      <!-- Desktop links -->
      <ul class="nav-links" role="list">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="nav-link" @click.prevent="scrollTo(link.href)">
            {{ link.label }}
          </a>
        </li>
      </ul>

   

      <!-- Hamburger -->
      <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition name="menu-fade">
      <div v-if="menuOpen" class="mobile-menu">
        <ul role="list">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" class="mobile-link" @click.prevent="scrollTo(link.href)">{{ link.label }}</a>
          </li>
        </ul>
        <a href="/Lakshmi Bharati.pdf" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:1rem">
          Download Resume
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background var(--dur-med) var(--ease-smooth), backdrop-filter var(--dur-med), box-shadow var(--dur-med);
  padding: 1.25rem 0;
}

.nav-wrapper.scrolled {
  background: rgba(7, 11, 20, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.05);
  padding: 0.75rem 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
}

.logo-initials {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.logo-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-text);
  white-space: nowrap;
}

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}

.nav-link {
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color var(--dur-fast), background var(--dur-fast);
}
.nav-link:hover {
  color: var(--color-text);
  background: var(--color-surface-hov);
}

.nav-cta { font-size: 0.85rem; padding: 0.55rem 1.2rem; flex-shrink: 0; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--dur-fast);
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(7, 11, 20, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  padding: 1.5rem;
}
.mobile-link {
  display: block;
  padding: 0.85rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-muted);
  border-bottom: 1px solid var(--color-border);
  transition: color var(--dur-fast);
}
.mobile-link:hover { color: var(--color-primary-l); }

/* Transition */
.menu-fade-enter-active, .menu-fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.menu-fade-enter-from, .menu-fade-leave-to { opacity: 0; transform: translateY(-8px); }

/* Responsive */
@media (max-width: 768px) {
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
}
</style>
