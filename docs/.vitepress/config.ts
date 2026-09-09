import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Product Auction for Shopify',

  description:
    'Powerful Product Auction solution for Shopify to create and manage auctions, enable real-time bidding, and increase customer engagement.',

  // Served from https://auction-doc.webkul.com/
  base: '/',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],

    // Chat Support
    [
      'script',
      {
        src: 'https://webkul.chatwhizz.com/chat-support/js/wk-chat-support.js'
      }
    ],

    // SEO
    [
      'meta',
      {
        name: 'title',
        content: 'Product Auction for Shopify'
      }
    ],

    [
      'meta',
      {
        name: 'description',
        content:
          'Powerful Product Auction solution for Shopify to create and manage auctions, enable real-time bidding, and increase customer engagement.'
      }
    ],

    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],

    [
      'meta',
      {
        property: 'og:title',
        content: 'Product Auction for Shopify'
      }
    ],

    [
      'meta',
      {
        property: 'og:description',
        content:
          'Powerful Product Auction solution for Shopify to create and manage auctions, enable real-time bidding, and increase customer engagement.'
      }
    ],

    [
      'meta',
      {
        property: 'og:image',
        content: 'https://webkul.com/blog/ogimage/?ogid=MTAwMDIz'
      }
    ],

    [
      'meta',
      {
        property: 'og:url',
        content: 'https://auction-doc.webkul.com/'
      }
    ],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

    [
      'meta',
      {
        name: 'twitter:title',
        content: 'Product Auction for Shopify'
      }
    ],

    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'Powerful Product Auction solution for Shopify to create and manage auctions, enable real-time bidding, and increase customer engagement.'
      }
    ],

    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://webkul.com/blog/ogimage/?ogid=MTAwMDIz'
      }
    ]
  ],

  themeConfig: {
    logo: {
      light: '/images/black.png',
      dark: '/images/white.png'
    },

    siteTitle: false,

    nav: [
      {
        text: 'Webkul',
        link: 'https://webkul.com/'
      },
      {
        text: 'Get App',
        link: 'https://store.webkul.com/Shopify-Product-Auction.html'
      },
      {
        text: 'Book a Demo',
        link: 'https://sp-auction.webkul.com/index.php?p=landing'
      },
      {
        text: 'Support',
        link: 'https://webkul.uvdesk.com/en/customer/create-ticket/'
      }
    ],

    sidebar: {
  '/guide/': [
    {
      text: 'Guide',
      items: [
        {
          text: 'Get Started',
          link: '/guide/get-started'
        },
        {
          text: 'Installation',
          link: '/guide/installation'
        },
        {
          text: 'Auction Configuration',
          link: '/guide/auction-configuration'
        },
        {
          text: 'Code Integration',
          link: '/guide/code-integration'
        },
        {
          text: 'Add Auction Product',
          link: '/guide/add-auction-product'
        },
        {
          text: 'Proxy Bidding',
          link: '/guide/proxy-bidding'
        },
        {
          text: 'Penny Auction',
          link: '/guide/penny-auction'
        },
        {
          text: 'Auto Pay',
          link: '/guide/auto-pay'
        },
        {
          text: 'CSV Feature',
          link: '/guide/csv-feature'
        },
        {
          text: 'SMTP Configuration',
          link: '/guide/smtp-configuration'
        },
        {
          text: 'Bid on Multiple Units',
          link: '/guide/bid-on-multiple-units'
        },
        {
          text: 'Auction Joining Fee',
          link: '/guide/auction-joining-fee'
        },
        {
          text: 'Restart Auctions',
          link: '/guide/restart-auctions'
        },
        {
          text: 'Upcoming Auctions',
          link: '/guide/upcoming-auctions'
        },
        {
          text: 'WhatsApp Notifications',
          link: '/guide/whatsapp-bid-notification'
        },
        {
          text: 'Klaviyo Integration',
          link: '/guide/klaviyo'
        },
        {
          text: 'Auto Pay',
          link: '/guide/auto-pay'
        },
        {
          text: 'Upgraded Features',
          link: '/guide/upgraded-features'
        }
      ]
    }
  ]
},

    // socialLinks: [
    //   {
    //     icon: 'github',
    //     link: 'https://github.com/pratik-webkul/product-auction-doc'
    //   }
    // ],

    search: {
      provider: 'local'
    },

    // editLink: {
    //   pattern:
    //     'https://github.com/pratik-webkul/product-auction-doc/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    footer: {
      message: 'Product Auction for Shopify documentation',
      copyright: `Copyright © ${new Date().getFullYear()} Webkul`
    }
  }
})