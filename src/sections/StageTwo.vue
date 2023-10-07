<!-- карусель с нейросетью и музыкой из ее фоток -->
<template>
  <div class="content">
    <PCarousel :circular="true" :value="videos" :showNavigators="false">
      <template #item="{ data, index }">
        <p-button v-if="index === 2" label="Я не смог обьяснить нейросети, что я хотел" :disabled="true" class="absolute-button-two next-stage-button p-button-rounded" />
        <p-button v-if="index === 3" label="Дальше?" @click="nextStage" class="absolute-button-three next-stage-button p-button-rounded" />
        <div class="carousel-item" v-if="data">
          <p-button v-if="!data.play" icon="pi pi-play" class="play-pause-button" @click.stop="playVideo(data.id)" />
          <p-button v-else icon="pi pi-pause" class="play-pause-button" @click.stop="playStop(data.id)" />
          <p class="text">{{ data.title }}</p>
          <video :id="data.title" class="image-carousel" :src="data.material" :alt="data.title" loop />
        </div>
      </template>
    </PCarousel>
  </div>
</template>

<script setup lang="ts">
// style="margin: 30px 0px; padding: 0.75rem 0; border-radius: 50%"
import PCarousel from 'primevue/carousel'
import PButton from 'primevue/button'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nextStage = () => {
  router.push('/stageThree')
}

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
    preview: new URL('@/assets/she/image/1.jpg', import.meta.url).href,
    material: new URL('@/assets/she/video/1.mp4', import.meta.url).href,
    title: 'Ты прекрасна как осень',
    play: false,
  },
  {
    id: 2,
    preview: new URL('@/assets/she/image/2.jpg', import.meta.url).href,
    material: new URL('@/assets/she/video/2.mp4', import.meta.url).href,
    title: 'У тебя правда красивые глаза',
    play: false,
  },
  {
    id: 3,
    preview: new URL('@/assets/she/image/3.jpg', import.meta.url).href,
    material: new URL('@/assets/she/video/3.mp4', import.meta.url).href,
    title: 'Если ты море, то я утонул',
    play: false,
  },
  {
    id: 4,
    preview: new URL('@/assets/she/image/4.jpg', import.meta.url).href,
    material: new URL('@/assets/she/video/4.mp4', import.meta.url).href,
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
  position: relative;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1019%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(246%2c 248%2c 251%2c 1)'%3e%3c/rect%3e%3cpath d='M947.3007015830982 151.6968520714841L849.4740385095737 30.655301261282354 798.5102104216705 156.79520216141972z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M83.326%2c767.089C139.417%2c767.728%2c183.179%2c723.891%2c210.368%2c674.825C236.595%2c627.494%2c245.693%2c570.216%2c218.267%2c523.569C191.159%2c477.465%2c136.806%2c459.315%2c83.326%2c458.754C28.658%2c458.181%2c-29.435%2c473.247%2c-56.606%2c520.688C-83.656%2c567.917%2c-65.677%2c624.659%2c-38.8%2c671.987C-11.492%2c720.074%2c28.03%2c766.459%2c83.326%2c767.089' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M200.0962946220288 405.8799127370882L97.8156341216894 422.0795779064584 114.01529929105956 524.3602384067977 216.29595979139899 508.1605732374276z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1337.2669741987602 475.7045538214136L1252.8755014337517 397.0082323266675 1174.1791799390055 481.3997050916761 1258.570652704014 560.0960265864222z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M559.108027788763 80.04056353788441L680.0621824717189 103.5516695166487 703.5732884504831-17.402485166307102 582.6191337675273-40.91359114507141z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M138.29131702836074 165.76670320814705L161.84786058960094 267.8013033251826 263.8824607066365 244.24475976394237 240.32591714539626 142.21015964690685z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M116.8035040414531 321.6595382498498L1.4650558074690423 277.38525611602927-42.80922632635151 392.7237043500133 72.52922190763255 436.99798648383387z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1156.229%2c568.685C1179.591%2c569.261%2c1195.116%2c546.749%2c1205.735%2c525.932C1215.216%2c507.347%2c1217.961%2c485.798%2c1207.811%2c467.57C1197.392%2c448.859%2c1177.645%2c436.972%2c1156.229%2c437.029C1134.907%2c437.085%2c1115.029%2c448.963%2c1105.117%2c467.841C1095.811%2c485.566%2c1101.731%2c505.732%2c1110.782%2c523.589C1121.123%2c543.991%2c1133.363%2c568.121%2c1156.229%2c568.685' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M10.81897084501278 401.68531886377195L95.01265733622547 397.27291472511484 90.60025319756839 313.0792282339022 6.406566706355697 317.49163237255925z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M493.4998414022476 245.7647792844925L386.9394990145375 372.7584501531152 513.9331698831602 479.3187925408253 620.4935122708703 352.32512167220267z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M780.821%2c340.208C832.286%2c338.978%2c876.331%2c305.019%2c900.088%2c259.348C922.075%2c217.08%2c915.729%2c167.614%2c892.129%2c126.225C868.273%2c84.387%2c828.98%2c49.717%2c780.821%2c50.181C733.295%2c50.639%2c697.691%2c87.623%2c673.168%2c128.336C647.6%2c170.784%2c628.802%2c221.12%2c651.249%2c265.298C675.471%2c312.968%2c727.365%2c341.486%2c780.821%2c340.208' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M584.1365624514978 185.14290408898944L597.275287545997 61.2719930270715 497.04145334535724 103.81873137737213z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M126.402%2c362.256C158.169%2c362.72%2c191.696%2c355.986%2c209.014%2c329.351C227.737%2c300.554%2c227.109%2c263.171%2c210.302%2c233.215C193.128%2c202.606%2c161.491%2c182.897%2c126.402%2c182.108C89.885%2c181.287%2c53.109%2c197.177%2c35.703%2c229.289C18.94%2c260.215%2c28.044%2c297.937%2c47.867%2c326.997C65.198%2c352.405%2c95.649%2c361.807%2c126.402%2c362.256' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1479.7889042205043 256.36277186949917L1340.277205045499 213.56433725425336 1366.7994056024831 338.3414805642674z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M364.772%2c113.227C386.329%2c114.194%2c408.228%2c103.353%2c417.576%2c83.904C426.091%2c66.188%2c414.493%2c47.408%2c404.557%2c30.448C394.785%2c13.768%2c384.104%2c-6.325%2c364.772%2c-6.228C345.522%2c-6.132%2c334.647%2c13.814%2c325.671%2c30.843C317.5%2c46.344%2c312.065%2c63.68%2c319.578%2c79.51C328.215%2c97.708%2c344.648%2c112.325%2c364.772%2c113.227' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1352.924%2c694.384C1401.567%2c695.945%2c1448.072%2c670.615%2c1472.014%2c628.243C1495.601%2c586.499%2c1492.332%2c534.275%2c1466.055%2c494.17C1442.017%2c457.481%2c1396.742%2c444.514%2c1352.924%2c446.478C1312.802%2c448.276%2c1277.021%2c469.302%2c1256.093%2c503.581C1234.159%2c539.509%2c1227.325%2c583.465%2c1246.375%2c621.002C1267.292%2c662.219%2c1306.727%2c692.902%2c1352.924%2c694.384' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1243.1192894408239 381.42925268759143L1128.898257559865 301.28849106675 1116.1486796669876 422.5926217770851z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1124.1352693632828 103.0097818693713L1249.2271043026726 143.65458287909465 1289.871905312396 18.562747939704877 1164.780070373006-22.08205307001846z' fill='rgba(142%2c 28%2c 139%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1019'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");

  .absolute-button-three {
    z-index: 1000;
    width: max-content;
    position: absolute;
    top: 5%;
    left: 427%;
  }

  .absolute-button-two {
    z-index: 1000;
    width: max-content;
    position: absolute;
    top: 5%;
    left: 310%;
    max-width: 300px;
    font-size: 0.8rem;
  }
  :deep(.p-carousel .p-carousel-indicators) {
    margin-top: 20px;
    display: flex;
    gap: 15px;
  }

  .p-carousel {
    max-width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 0 10px;
  }

  .play-pause-button {
    padding: 0.8rem 0.6rem;
    border-radius: 50%;
    margin-top: 60px;
    margin-bottom: 20px;
    transform: scale(1.5);

    :deep(.p-button-icon) {
      font-size: 1.4rem;
    }
  }
}

.carousel-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

  .image-carousel {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    font-size: 1.5rem;
    text-align: center;
    padding-top: 25px;
  }
}
</style>
