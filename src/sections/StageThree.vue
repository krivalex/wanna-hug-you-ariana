<!-- приглашения поесть сырный рамен и приглашение на фотосет -->
<template>
  <div class="background">
    <video autoplay loop muted>
      <source src="@/assets/bg-video-stocks/sea.mp4" type="video/mp4" />
    </video>
    <audio id="audio" loop muted>
      <source src="@/assets/bg-audio/Wet_Hands.mp3" type="audio/mp3" />
    </audio>
  </div>
  <div class="wheel-slow-text">
    <div v-if="poema[0].show" class="appeariance-text text">
      <h1>{{ poema[0].text }}</h1>
    </div>
    <div v-if="poema[1].show" class="appeariance-text text">
      <h1>{{ poema[1].text }}</h1>
    </div>
    <div v-if="poema[2].show" class="appeariance-text text">
      <h1>{{ poema[2].text }}</h1>
    </div>
    <div v-if="poema[3].show" class="appeariance-text text">
      <h1>{{ poema[3].text }}</h1>
    </div>
    <p-button v-if="nextStageApprove" label="Дальше" @click="nextStage" class="next-stage-button p-button-rounded" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import PButton from 'primevue/button'

const router = useRouter()

const nextStageApprove = ref(false)

const nextStage = () => {
  router.push('/stage4')
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
    poema.value[0].show = true
  }, 2000)
  setTimeout(() => {
    poema.value[1].show = true
  }, 6000)
  setTimeout(() => {
    poema.value[2].show = true
  }, 10000)
  setTimeout(() => {
    poema.value[3].show = true
  }, 13000)
  setTimeout(() => {
    nextStageApprove.value = true
  }, 17000)
})

const poema = ref([
  {
    id: 1,
    time: 2,
    show: false,
    text: 'Тайны её души, как морские волны громкие,',
  },
  {
    id: 2,
    time: 3,
    show: false,
    text: 'Сквозь них плывут мечты, как корабли вдали.',
  },
  {
    id: 3,
    time: 3,
    show: false,
    text: 'Ариана, море страсти и мечты,',
  },
  {
    id: 4,
    time: 3,
    show: false,
    text: 'В твоей нежности плыву, как в океане морей.',
  },
])
</script>
