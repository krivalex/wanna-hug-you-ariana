<!-- карусель с нейросетью и музыкой из ее фоток -->
<template>
  <div class="content">
    <PCarousel :circular="true" :value="videos">
      <template #item="{ data }">
        <div class="carousel-item" v-if="data">
          <p-button v-if="!data.play" icon="pi pi-play" style="margin: 30px 0px; padding: 0.75rem 0; border-radius: 50%" @click.stop="playVideo(data.id)" />
          <p-button v-else icon="pi pi-pause" class="button p-button-rounded" @click.stop="playStop(data.id)" />
          <p>{{ data.title }}</p>
          <video :id="data.title" class="image-carousel" :src="data.material" :alt="data.title" autoplay loop />
        </div>
      </template>
    </PCarousel>
  </div>
</template>

<script setup lang="ts">
import PCarousel from 'primevue/carousel'
import PButton from 'primevue/button'
import { ref } from 'vue'

function playVideo(id: number) {
  const video = videos.value.find((video) => video.id === id)
  if (video) {
    video.play = true
    const videoElement = document.getElementById(video.title) as HTMLVideoElement
    videoElement.play()
  }
  videos.value.forEach((video) => {
    if (video.id !== id) {
      video.play = false
      const videoElement = document.getElementById(video.title) as HTMLVideoElement
      videoElement.pause()
    }
  })
}

function playStop(id: number) {
  const video = videos.value.find((video) => video.id === id)
  if (video) {
    video.play = false
    const videoElement = document.getElementById(video.title) as HTMLVideoElement
    videoElement.pause()
  }
  videos.value.forEach((video) => {
    if (video.id !== id) {
      video.play = false
      const videoElement = document.getElementById(video.title) as HTMLVideoElement
      videoElement.pause()
    }
  })
}

const videos = ref([
  {
    id: 1,
    preview: 'src/assets/she/image/1.jpg',
    material: 'src/assets/she/video/1.mp4',
    title: 'Ты прекрасна как осень',
    play: false,
  },
  {
    id: 2,
    preview: 'src/assets/she/image/2.jpg',
    material: 'src/assets/she/video/2.mp4',
    title: 'У тебя правда красивые глаза',
    play: false,
  },
  {
    id: 3,
    preview: 'src/assets/she/image/3.jpg',
    material: 'src/assets/she/video/3.mp4',
    title: 'Если ты море, то я утонул',
    play: false,
  },
  {
    id: 4,
    preview: 'src/assets/she/image/4.jpg',
    material: 'src/assets/she/video/4.mp4',
    title: 'Может я все таки могу любить?',
    play: false,
  },
])
</script>

<style scoped lang="scss">
.content {
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.carousel-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  position: relative;

  .image-carousel {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
