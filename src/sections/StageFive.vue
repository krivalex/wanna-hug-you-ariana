<template>
  <div class="background">
    <video autoplay loop muted class="cover">
      <source src="@/assets/bg-video-stocks/pexels.mp4" type="video/mp4" />
    </video>
    <audio id="audio" loop muted>
      <source src="@/assets/bg-audio/BRANDparo.mp3" type="audio/mp3" />
    </audio>
  </div>
  <div class="wheel-slow-text">
    <div v-if="firstText" class="appeariance-text text">
      <h1>Я приглашаю тебя</h1>
    </div>
    <div v-if="secondText" class="appeariance-text text">
      <h2>На фотосет</h2>
      <img class="image" src="@/assets/photo.jpg" />
    </div>
    <div v-if="thirdText" class="appeariance-text text">
      <h2>И на сырный рамен</h2>
      <img class="image" src="@/assets/ramen.jpg" />
    </div>
    <p-button v-if="nextStageApprove" label="Когда?" @click="nextStage" class="next-stage-button p-button-rounded" />
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()

const nextStage = () => {
  router.push('/stage6')
}

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
  }, 8000)
  setTimeout(() => {
    thirdText.value = true
  }, 13000)
  setTimeout(() => {
    nextStageApprove.value = true
  }, 20000)
})

const nextStageApprove = ref(false)
const firstText = ref(false)
const secondText = ref(false)
const thirdText = ref(false)
</script>

<style scoped lang="scss">
.image {
  object-fit: cover;
  max-width: 70%;
  max-height: 60%;
  width: 70%;
  height: 60%;
  box-shadow: 0 0 3px 5px #ffffff;
  margin-top: 15px;
}

.cover {
  object-fit: contain;
}
</style>
