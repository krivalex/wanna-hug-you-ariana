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
    <h1 class="label">Маршрут и локация</h1>
    <div style="position: relative; overflow: hidden; width: 96vw">
      <a href="https://yandex.ru/maps/162/almaty/?utm_medium=mapframe&utm_source=maps" style="color: #eee; font-size: 12px; position: absolute; top: 0px">Алматы</a
      ><a
        href="https://yandex.ru/maps/162/almaty/?ll=76.890162%2C43.192791&mode=routes&rtext=43.189166%2C76.903604~43.193476%2C76.885436&rtt=pd&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NzI3MjYyNhKNAdKa0LDQt9Cw0pvRgdGC0LDQvSwg0JDQu9C80LDRgtGLLCDQkdC-0YHRgtCw0L3QtNGL0psg0LDRg9C00LDQvdGLLCDQndKx0YAg0JDQu9Cw0YLQsNGDINGI0LDSk9GL0L0g0LDRg9C00LDQvdGLLCDQkdKx0LvQsdKx0Lsg0LrTqdGI0LXRgdGWLCAxNCIKDabOmUIVtcEsQg%2C%2C~&utm_medium=mapframe&utm_source=maps&z=15.86"
        style="color: #eee; font-size: 12px; position: absolute; top: 14px"
        >Яндекс Карты</a
      ><iframe
        src="https://yandex.ru/map-widget/v1/?ll=76.890162%2C43.192791&mode=routes&rtext=43.189166%2C76.903604~43.193476%2C76.885436&rtt=pd&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NzI3MjYyNhKNAdKa0LDQt9Cw0pvRgdGC0LDQvSwg0JDQu9C80LDRgtGLLCDQkdC-0YHRgtCw0L3QtNGL0psg0LDRg9C00LDQvdGLLCDQndKx0YAg0JDQu9Cw0YLQsNGDINGI0LDSk9GL0L0g0LDRg9C00LDQvdGLLCDQkdKx0LvQsdKx0Lsg0LrTqdGI0LXRgdGWLCAxNCIKDabOmUIVtcEsQg%2C%2C~&z=15.86"
        width="100%"
        height="500px"
        frameborder="1"
        allowfullscreen="true"
        style="position: relative"
      ></iframe>
    </div>
    <p-button label="Далее" @click="nextStage" class="next-stage-button p-button-rounded" />
    <p-button v-if="warningButton" label="Тебя должно было перебросить в инстаграм, если этого не случилось, то напиши сама" :disabled="true" />
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { ref } from 'vue'

const warningButton = ref(false)

const nextStage = () => {
  warningButton.value = true
  window.open('https://www.instagram.com/direct/t/102880431113956/?hl=ru', '_blank')
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 20px;
}
</style>
