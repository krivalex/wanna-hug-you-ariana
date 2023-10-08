<template>
  <div class="content">
    <h2 class="this-text" v-if="show">{{ text }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const colors = [
  '#2196f3',
  '#f43f5e',
  '#ec4899',
  '#d946ef',
  '#a855f7',
  '#8b5cf6',
  '#6366f1',
  '#3b82f6',
  '#0ea5e9',
  '#06b6d4',
  '#14b8a6',
  '#10b981',
  '#22c55e',
  '#84cc16',
  '#eab308',
  '#f59e0b',
  '#f97316',
  '#ef4444',
]

setInterval(() => {
  const color = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.setProperty('--background', color)
}, 5000)

defineProps({
  text: String,
  show: Boolean,
})
</script>

<style scoped lang="scss">
.content {
  font-family: 'Baloo Tamma', cursive;
  background: var(--background);
  color: var(--color);
  transition: 4s;
  height: 100vh;
  width: 100vw;
}
.this-text {
  text-align: center;
  width: 100vw;
  margin: 0px auto;
  font-size: 40px;
  padding: 0 10px;
  letter-spacing: 5px;
  top: 40%;
  position: absolute;
  transition: 4s;
  text-shadow: -1px -1px 0px var(--background), 3px 3px 0px var(--background), 6px 6px 0px #00000055;
}
</style>
