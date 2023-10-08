<!-- включи звук на телефоне -->
<!-- надпись wanna hug you ariana -->
<!-- стихотворение про море и девушку - красиво выходит -->
<!-- в конце кнопку перехода на следующий стейдж -->
<template>
  <div class="background">
    <video autoplay loop muted>
      <source src="@/assets/bg-video-stocks/rain.mp4" type="video/mp4" />
    </video>
    <audio id="audio" loop muted>
      <source src="@/assets/bg-audio/BRANDwet.mp3" type="audio/mp3" />
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

document.body.addEventListener('mousemove', function () {
  startAudio()
})

const startAudio = () => {
  const audio = document.getElementById('audio') as HTMLAudioElement
  audio.muted = false
  audio.play()
}

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
  router.push('/stage2')
}
</script>

<style lang="scss"></style>
