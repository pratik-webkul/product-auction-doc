<template>
  <div class="auction-slider">
    <div class="slider-container">
      <img
        :src="images[currentIndex]"
        alt="Product Auction Feature"
        class="slider-image"
      />
    </div>

    <div class="slider-dots">
      <button
        v-for="(image, index) in images"
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
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/images/auction/black.png',
  '/images/auction/white.png',
  '/images/auction/favicon.png'
]

const currentIndex = ref(0)
let interval = null

const nextSlide = () => {
  currentIndex.value =
    (currentIndex.value + 1) % images.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

onMounted(() => {
  interval = setInterval(() => {
    nextSlide()
  }, 4000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* =================================
   SLIDER
================================= */

.auction-slider {
  width: 100%;
  max-width: 560px;

  /* Desktop par right side shift */
  margin: 0 auto;
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