<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number; alpha: number
  color: string
}

let animId = 0
const particles: Particle[] = []
const COLORS = ['#6366f1', '#06b6d4', '#ec4899', '#8b5cf6']

function init() {
  const c = canvas.value!
  c.width = window.innerWidth
  c.height = window.innerHeight

  particles.length = 0
  const count = Math.floor((c.width * c.height) / 14000)
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    })
  }
}

function draw() {
  const c = canvas.value!
  const ctx = c.getContext('2d')!
  ctx.clearRect(0, 0, c.width, c.height)

  for (const p of particles) {
    p.x += p.vx
    p.y += p.vy
    if (p.x < 0) p.x = c.width
    if (p.x > c.width) p.x = 0
    if (p.y < 0) p.y = c.height
    if (p.y > c.height) p.y = 0

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = p.color
    ctx.globalAlpha = p.alpha
    ctx.fill()
  }

  // Draw connection lines between close particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 100) {
        ctx.beginPath()
        ctx.strokeStyle = '#6366f1'
        ctx.globalAlpha = (1 - dist / 100) * 0.08
        ctx.lineWidth = 0.6
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }

  ctx.globalAlpha = 1
  animId = requestAnimationFrame(draw)
}

function onResize() {
  init()
}

onMounted(() => {
  init()
  draw()
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <canvas ref="canvas" class="particles-canvas" aria-hidden="true" />
</template>

<style scoped>
.particles-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
