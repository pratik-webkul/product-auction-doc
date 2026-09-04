import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Product Auction',
  description: 'Documentation for the Product Auction module',

  // Served from https://auction-doc.webkul.com/
  base: '/',

  lastUpdated: true,
  cleanUrls: true,

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pratik-webkul/product-auction-doc' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern:
        'https://github.com/pratik-webkul/product-auction-doc/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Product Auction documentation',
      copyright: `Copyright © ${new Date().getFullYear()} Webkul`
    }
  }
})
