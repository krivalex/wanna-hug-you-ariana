<template>
  <div class="background">
    <video autoplay loop muted>
      <source src="@/assets/bg-video-stocks/rain.mp4" type="video/mp4" />
    </video>
    <audio id="audio" loop muted>
      <source src="@/assets/bg-audio/Wet_Hands.mp3" type="audio/mp3" />
    </audio>
  </div>
  <h1 class="label">Карта маршрута</h1>
  <div id="map" style="width: 100vw; height: 400px"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ymaps from 'ymaps'

const markerIcon = {
  layout: 'default#imageWithContent',
  imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
  imageSize: [43, 43],
  imageOffset: [0, 0],
  content: 'content',
  contentOffset: [35, 15],
  contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
}

onMounted(() => {
  const myMap = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 7,
  })

  const myPlacemark = new ymaps.Placemark(
    [55.76, 37.64],
    {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка',
    },
    markerIcon
  )

  myMap.geoObjects.add(myPlacemark)
})
</script>
