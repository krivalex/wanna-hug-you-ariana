<template>
  <div class="background">
    <video autoplay loop muted>
      <source src="@/assets/bg-video-stocks/rain.mp4" type="video/mp4" />
    </video>
    <audio id="audio" loop muted>
      <source src="@/assets/bg-audio/Wet_Hands.mp3" type="audio/mp3" />
    </audio>
  </div>
  <div class="content">
    <h1>Я приглашаю тебя</h1>
    <h2>На фотосет</h2>
    <h2>И на сырный рамен</h2>
    <p-button label="Когда?" @click="nextStage" class="next-stage-button p-button-rounded" />
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()

const nextStage = () => {
  router.push('/stage6')
}
</script>
