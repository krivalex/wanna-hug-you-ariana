<template>
  <div class="background">
    <audio id="audio" loop muted>
      <source src="@/assets/bg-audio/BRANDaway.mp3" type="audio/mp3" />
    </audio>
  </div>
  <div v-for="item in text" :key="item.letters">
    <BeatyAnimationText v-if="item.show" :text="item.letters" :show="item.show" />
  </div>
  <div class="absolute">
    <p-button v-if="nextStageApprove" label="Что же в конце?" @click="nextStage" class="next-stage-button p-button-rounded" />
  </div>
</template>

<script setup lang="ts">
import BeatyAnimationText from '../components/BeatyAnimationText.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PButton from 'primevue/button'

const startAudio = () => {
  const audio = document.getElementById('audio') as HTMLAudioElement
  audio.muted = false
  audio.play()
}

const router = useRouter()

const nextStageApprove = ref(false)

const nextStage = () => {
  router.push('/stage5')
}

onMounted(() => {
  setTimeout(() => {
    startAudio()
  }, 300)
  setTimeout(() => {
    text.value[0].show = true
  }, 1000)
  setTimeout(() => {
    text.value[0].show = false
    text.value[1].show = true
  }, 8000)
  setTimeout(() => {
    text.value[1].show = false
    text.value[2].show = true
  }, 13000)
  setTimeout(() => {
    text.value[2].show = false
    text.value[3].show = true
  }, 18000)
  setTimeout(() => {
    text.value[3].show = false
    text.value[4].show = true
  }, 23000)
  setTimeout(() => {
    text.value[4].show = false
    text.value[5].show = true
  }, 28000)
  setTimeout(() => {
    text.value[4].show = false
    nextStageApprove.value = true
  }, 33000)
})

const text = ref([
  {
    letters: 'Красивые цветы, правда?',
    show: false,
  },
  {
    letters: 'Они напомнили мне тебя',
    show: false,
  },
  {
    letters: 'Знаешь, джентельмены не дарят цветы просто так',
    show: false,
  },
  {
    letters: 'А вот подонки вполне могут',
    show: false,
  },
  {
    letters: 'Я хочу узнать тебя получше,',
    show: false,
  },
  {
    letters: 'Попробуй понять меня, возможно все сложнее чем кажется',
    show: false,
  },
])
</script>

<style lang="scss">
.absolute {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
</style>
