<template>
  <router-view />
</template>

<script setup lang="ts"></script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transform: rotate3d(1, 0, 0, 0deg);
  transition: transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: rotate3d(1, 0, 0, 180deg);
}
</style>
