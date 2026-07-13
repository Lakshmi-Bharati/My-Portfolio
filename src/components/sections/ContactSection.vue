<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({ name: '', email: '', phone: '', subject: '', message: '' })
const submitted = ref(false)
const loading = ref(false)

async function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) return
  loading.value = true
  
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS keys are not configured. Simulating successful form submission...')
      await new Promise((r) => setTimeout(r, 1500))
    } else {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.value.name,
          email: form.value.email,
          phone: form.value.phone,
          subject: form.value.subject || 'Portfolio Form Submission',
          message: form.value.message,
        },
        publicKey
      )
    }
    submitted.value = true
  } catch (error) {
    console.error('Failed to send email:', error)
    alert('Failed to send message. Please try emailing me directly.')
  } finally {
    loading.value = false
  }
}

const contactDetails = [
  {
    icon: '📧',
    label: 'Email',
    value: 'lakshmibharatijuly96@gmail.com',
    href: 'mailto:lakshmibharatijuly96@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 90965 96080',
    href: 'tel:+919096596080',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Nashik, India',
    href: '#',
  },
  {
    icon: '🏢',
    label: 'Company',
    value: 'Katalyst Consulting Services Pty Ltd',
    href: 'https://www.katalystcs.com.au/',
  },
]
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="orb orb-contact" />
    <div class="container contact-grid">
      <!-- Left: Info -->
      <div class="contact-info">
        <span class="section-label fade-in">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          Get In Touch
        </span>

        <h2 class="contact-heading fade-in">
          Let's build<br />
          <span class="grad-text">something great</span>
        </h2>

        <p class="contact-desc fade-in">
          Whether you have a project in mind, want to discuss tech, or simply say hi —
          my inbox is always open.
        </p>

        <div class="contact-details fade-in">
          <a
            v-for="cd in contactDetails"
            :key="cd.label"
            :href="cd.href"
            class="glass-card contact-item"
          >
            <span class="contact-icon">{{ cd.icon }}</span>
            <div>
              <div class="contact-lbl">{{ cd.label }}</div>
              <div class="contact-val">{{ cd.value }}</div>
            </div>
          </a>
        </div>

        <!-- Social links -->
        <div class="social-links fade-in">
          <a href="https://github.com/Lakshmi-Bharati?tab=repositories" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/lakshmibharati1996/" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      <!-- Right: Form -->
      <div class="contact-form-wrapper fade-in">
        <div class="glass-card contact-form-card">
          <Transition name="fade" mode="out-in">
            <div v-if="submitted" key="success" class="success-state">
              <div class="success-icon">✅</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
              <button class="btn btn-outline" @click="submitted = false; form = { name: '', email: '', phone: '', subject: '', message: '' }">
                Send another
              </button>
            </div>
            <form v-else key="form" class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label for="cf-name">Name</label>
                  <input id="cf-name" v-model="form.name" type="text" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label for="cf-email">Email</label>
                  <input id="cf-email" v-model="form.email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="cf-phone">Phone Number</label>
                  <input id="cf-phone" v-model="form.phone" type="tel" placeholder="Your phone number" />
                </div>
                <div class="form-group">
                  <label for="cf-subject">Subject</label>
                  <input id="cf-subject" v-model="form.subject" type="text" placeholder="What's this about?" />
                </div>
              </div>
              <div class="form-group">
                <label for="cf-message">Message</label>
                <textarea id="cf-message" v-model="form.message" rows="5" placeholder="Tell me about your project or idea…" required />
              </div>
              <button type="submit" class="btn btn-primary submit-btn" :disabled="loading">
                <span v-if="loading">Sending…</span>
                <span v-else>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </span>
              </button>
            </form>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section { overflow: hidden; }

.orb-contact {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%);
  bottom: -100px; right: -100px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  position: relative;
  z-index: 1;
}

.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}
.contact-desc { color: var(--color-text-muted); line-height: 1.8; margin-bottom: 2rem; font-size: 1rem; }

.contact-details { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; }

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.2rem;
  text-decoration: none;
}
.contact-icon { font-size: 1.3rem; }
.contact-lbl { font-size: 0.72rem; color: var(--color-text-faint); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
.contact-val { font-size: 0.9rem; color: var(--color-text); font-weight: 500; }

.social-links { display: flex; gap: 0.75rem; }
.social-btn {
  width: 42px; height: 42px;
  border-radius: 10px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-text-muted);
  transition: all var(--dur-fast);
  text-decoration: none;
}
.social-btn:hover {
  background: var(--color-surface-hov);
  border-color: var(--color-primary);
  color: var(--color-primary-l);
  transform: translateY(-2px);
}

/* Form */
.contact-form-card { padding: 2rem; }

.contact-form { display: flex; flex-direction: column; gap: 1.25rem; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.form-group { display: flex; flex-direction: column; gap: 0.4rem; }

label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
}

input, textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.7rem 0.9rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text);
  outline: none;
  transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
  resize: vertical;
}
input:focus, textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
}
input::placeholder, textarea::placeholder { color: var(--color-text-faint); }

.submit-btn { width: 100%; justify-content: center; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

/* Success */
.success-state { text-align: center; padding: 2rem 0; }
.success-icon { font-size: 3rem; margin-bottom: 1rem; }
.success-state h3 { font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 0.5rem; }
.success-state p { color: var(--color-text-muted); margin-bottom: 1.5rem; }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
