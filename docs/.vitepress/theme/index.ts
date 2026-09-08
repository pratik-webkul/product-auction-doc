import { h, type App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import AuctionSlider from './AuctionSlider.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }: { app: App }) {
    app.component('AuctionSlider', AuctionSlider)
  },

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(AuctionSlider)
    })
  }
}