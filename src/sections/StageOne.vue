<!-- включи звук на телефоне -->
<!-- надпись wanna hug you ariana -->
<!-- стихотворение про море и девушку - красиво выходит -->
<!-- в конце кнопку перехода на следующий стейдж -->
<template>
  <div class="slow-text text">
    <h1>Одень наушники и смотри со звуком</h1>
  </div>
  <div class="slow-text text">
    <h1>Wanna hug you, Ariana</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.slow-text {
  animation: slow-text 6s linear infinite;
}

@keyframes slow-text {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
