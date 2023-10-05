<!-- включи звук на телефоне -->
<!-- надпись wanna hug you ariana -->
<!-- стихотворение про море и девушку - красиво выходит -->
<!-- в конце кнопку перехода на следующий стейдж -->
<template>
  <div class="background">
    <video autoplay loop>
      <source src="@/assets/bg-video-stocks/rain.mp4" type="video/mp4" />
    </video>
    <audio autoplay loop>
      <source src="@/assets/bg-audio/Wet_Hands.mp3" type="audio/mp3" id="audio" />
    </audio>
  </div>
  <div class="wheel-slow-text">
    <div v-if="firstText" class="slow-text text">
      <h1>Одень наушники и смотри со звуком</h1>
    </div>
    <div v-if="secondText" class="slow-text text">
      <h1>Wanna hug you, Ariana</h1>
    </div>
    <p-button v-if="nextStageApprove" label="Я готова" @click="nextStage" class="next-stage-button p-button-rounded" />
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nextStageApprove = ref(false)
const firstText = ref(false)
const secondText = ref(false)

onMounted(() => {
  setTimeout(() => {
    firstText.value = true
  }, 2000)
  setTimeout(() => {
    secondText.value = true
  }, 6000)
  setTimeout(() => {
    nextStageApprove.value = true
  }, 10000)
})

const nextStage = () => {
  router.push('/stageTwo')
}
</script>

<style scoped lang="scss">
.next-stage-button {
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  animation: slow-text 12s linear infinite;
}

.wheel-slow-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;

  .text {
    font-size: 1rem;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 2rem 10px;
  }

  .slow-text {
    animation: slow-text 6s linear infinite;
  }
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  object-fit: contain;
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
