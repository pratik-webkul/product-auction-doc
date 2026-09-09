<template>
  <div class="auction-slider">
    <div class="slider-container">

      <!-- YouTube Video -->
      <div
        v-if="currentIndex === 0"
        class="video-wrapper"
      >
        <iframe
          id="auction-youtube-player"
          :src="videoUrl"
          title="Product Auction Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Images -->
      <img
        v-else
        :src="images[currentIndex - 1]"
        alt="Product Auction Feature"
        class="slider-image"
      />

    </div>

    <!-- Dots -->
    <div class="slider-dots">
      <button
        v-for="(slide, index) in totalSlides"
        :key="index"
        class="dot"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'


/* =================================
   YOUTUBE VIDEO
================================= */

const videoUrl =
  'https://www.youtube.com/embed/toBPGIZ_kAA?enablejsapi=1&rel=0'


/* =================================
   IMAGES
================================= */

const images = [
  '/images/auction/auction1.png',
  '/images/auction/auction2.png',
  '/images/auction/auction3.png',
  '/images/auction/auction4.png',
  '/images/auction/auction5.png',
  '/images/auction/auction6.png',
  '/images/auction/auction7.png'
]


/* =================================
   SLIDER
================================= */

const currentIndex = ref(0)

const totalSlides = computed(() => {
  return images.length + 1
})

let interval = null
let youtubePlayer = null
let youtubeApiReady = false


/* =================================
   NEXT SLIDE
================================= */

const nextSlide = () => {
  currentIndex.value =
    (currentIndex.value + 1) % totalSlides.value
}


/* =================================
   START AUTO SLIDER
================================= */

const startSlider = () => {
  stopSlider()

  interval = setInterval(() => {

    /*
     * Agar YouTube video currently play ho rahi hai,
     * slider move nahi karega.
     */
    if (youtubePlayer && currentIndex.value === 0) {
      const playerState = youtubePlayer.getPlayerState()

      // YouTube PLAYING state
      if (playerState === 1) {
        return
      }
    }

    nextSlide()

  }, 4000)
}


/* =================================
   STOP AUTO SLIDER
================================= */

const stopSlider = () => {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}


/* =================================
   GO TO SPECIFIC SLIDE
================================= */

const goToSlide = async (index) => {

  stopSlider()

  /*
   * Agar current slide video hai,
   * old YouTube player destroy karo.
   */
  if (youtubePlayer) {
    youtubePlayer.destroy()
    youtubePlayer = null
  }

  currentIndex.value = index

  await nextTick()

  /*
   * Agar video slide par aaye hain,
   * YouTube player create karo.
   */
  if (currentIndex.value === 0) {
    createYoutubePlayer()
  }

  startSlider()
}


/* =================================
   YOUTUBE STATE CHANGE
================================= */

const handleYoutubeState = (event) => {

  /*
   * 1 = PLAYING
   *
   * User ne video play kiya,
   * isliye slider completely stop.
   */
  if (event.data === 1) {
    stopSlider()
  }

  /*
   * 2 = PAUSED
   * 0 = ENDED
   *
   * Video pause/end hone par
   * slider dobara start.
   */
  else if (event.data === 2 || event.data === 0) {
    startSlider()
  }
}


/* =================================
   CREATE YOUTUBE PLAYER
================================= */

const createYoutubePlayer = () => {

  if (!youtubeApiReady) {
    return
  }

  const iframe = document.getElementById(
    'auction-youtube-player'
  )

  if (!iframe) {
    return
  }

  youtubePlayer = new window.YT.Player(
    'auction-youtube-player',
    {
      events: {
        onStateChange: handleYoutubeState
      }
    }
  )
}


/* =================================
   LOAD YOUTUBE API
================================= */

const loadYoutubeApi = () => {

  /*
   * Agar API already loaded hai
   */
  if (window.YT && window.YT.Player) {

    youtubeApiReady = true

    if (currentIndex.value === 0) {
      createYoutubePlayer()
    }

    return
  }


  /*
   * Duplicate script prevent karo
   */
  if (document.getElementById('youtube-iframe-api')) {
    return
  }


  const script = document.createElement('script')

  script.id = 'youtube-iframe-api'

  script.src =
    'https://www.youtube.com/iframe_api'

  document.body.appendChild(script)


  /*
   * YouTube API ready hone ke baad
   * player create hoga.
   */
  window.onYouTubeIframeAPIReady = () => {

    youtubeApiReady = true

    if (currentIndex.value === 0) {
      createYoutubePlayer()
    }
  }
}


/* =================================
   MOUNT
================================= */

onMounted(() => {

  /*
   * YouTube API load karo
   */
  loadYoutubeApi()

  /*
   * Auto slider start
   */
  startSlider()
})


/* =================================
   UNMOUNT
================================= */

onUnmounted(() => {

  stopSlider()

  if (youtubePlayer) {
    youtubePlayer.destroy()
    youtubePlayer = null
  }
})
</script>


<style scoped>

/* =================================
   SLIDER
================================= */

.auction-slider {
  width: 100%;
  max-width: 560px;

  margin: 0 auto;

  /* Desktop par right side shift */
  transform: translateX(100px);
}


/* =================================
   SLIDER CONTAINER
================================= */

.slider-container {
  position: relative;

  width: 100%;

  overflow: hidden;

  border-radius: 12px;
}


/* =================================
   IMAGE
================================= */

.slider-image {
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;

  transition: opacity 0.3s ease;
}


/* =================================
   YOUTUBE VIDEO
================================= */

.video-wrapper {
  position: relative;

  width: 100%;

  aspect-ratio: 16 / 9;

  overflow: hidden;

  border-radius: 12px;
}

.video-wrapper iframe {
  display: block;

  width: 100%;
  height: 100%;

  border: 0;
}


/* =================================
   DOTS
================================= */

.slider-dots {
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 7px;

  margin-top: 14px;
}

.dot {
  width: 8px;
  height: 8px;

  padding: 0;

  border: none;

  border-radius: 50%;

  background: #ccc;

  cursor: pointer;

  transition: all 0.2s ease;
}

.dot.active {
  width: 20px;

  border-radius: 10px;

  background: var(--vp-c-brand-1);
}


/* =================================
   TABLET
================================= */

@media (max-width: 1100px) {

  .auction-slider {
    max-width: 520px;

    transform: translateX(60px);
  }
}


/* =================================
   MOBILE
================================= */

@media (max-width: 768px) {

  .auction-slider {
    width: 100%;

    max-width: 100%;

    margin: 0 auto;

    transform: none;
  }

  .slider-dots {
    margin-top: 12px;
  }
}

</style>