<!-- приглашения поесть сырный рамен и приглашение на фотосет -->
<template>
  <audio id="audio" autoplay loop>
    <source src="@/assets/bg-audio/Wet_Hands.mp3" type="audio/mp3" id="audio" />
  </audio>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement
    audio.play()
  }, 1000)
})

const poema = [
  {
    id: 1,
    time: 10,
    text: 'Тайны её души, как морские волны громкие,',
  },
  {
    id: 2,
    time: 3,
    text: 'Сквозь них плывут мечты, как корабли вдали.',
  },
  {
    id: 3,
    time: 3,
    text: 'Ариана, море страсти и мечты,',
  },
  {
    id: 4,
    time: 3,
    text: 'В твоей нежности плыву, как в океане морей.',
  },
]
</script>
