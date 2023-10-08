<template>
  <div class="background">
    <video autoplay loop muted class="cover">
      <source src="@/assets/bg-video-stocks/wave.mp4" type="video/mp4" />
    </video>
    <audio id="audio" loop muted>
      <source src="@/assets/bg-audio/Wet_Hands.mp3" type="audio/mp3" />
    </audio>
  </div>
  <div class="content">
    <p-button v-if="warningButton" label="Тебя должно было перебросить в инстаграм, если этого не случилось, то напиши сама" :disabled="true" class="warning-button p-button-rounded" />
    <p-carousel :circular="true" :value="value" :showNavigators="false">
      <template #item="{ data, index }">
        <div class="carousel-item" v-if="data">
          <div v-if="index === 0">
            <h1 class="text">Маршрут и локация</h1>
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
          </div>
          <div class="flex" v-if="index === 1">
            <h1 class="text">Дата</h1>
            <p-calendar v-model="date" inline showWeek touchUI :date-format="'ru-ru'" :disabled="true" />
            <p-button v-if="!warningButton" label="Нажми на меня" @click="nextStage" class="next-stage-button p-button-rounded" />
            <p-button v-else label="Инстаграм" :disabled="true" class="next-stage-button-no-animation p-button-rounded" />
          </div>
        </div>
      </template>
    </p-carousel>
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import PCalendar from 'primevue/calendar'
import PCarousel from 'primevue/carousel'

import { ref } from 'vue'

const warningButton = ref(false)
const date = ref(new Date('10/14/2023'))

const value = ref([
  {
    label: 'Маршрут и локация',
    value: 0,
  },
  {
    label: 'Дата',
    value: 1,
  },
])

const nextStage = () => {
  warningButton.value = true
  window.open('https://www.instagram.com/direct/t/102880431113956/?hl=ru', '_blank')
}
</script>

<style scoped lang="scss">
:deep(.p-datepicker.p-disabled) {
  opacity: 1 !important;
}

:deep(.p-highlight) {
  background-color: red !important;
  color: white !important;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 20px;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.warning-button {
  max-width: 80%;
  padding: 0.5rem 1rem;
}

.carousel-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  overflow: hidden;

  .image-carousel {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 20px;
    color: white;
    -webkit-text-stroke: 0.6px black;
  }
}

:deep(.p-carousel .p-carousel-indicators) {
  margin-top: 20px;
  display: flex;
  gap: 15px;
}

:deep(.p-calendar) {
  min-width: 96vw;

  .p-datepicker {
    width: 100% !important;
  }
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>
