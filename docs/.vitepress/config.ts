import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Product Auction for Shopify',

  description:
    'Powerful Product Auction solution for Shopify to create and manage auctions, enable real-time bidding, and increase customer engagement.',

  // Served from https://auction-doc.webkul.com/
  base: '/',

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    config(md) {

      // NORMAL IMAGE SUPPORT ![img](url)
      const defaultImage =
        md.renderer.rules.image ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options)
        }

      md.renderer.rules.image = function (tokens, idx, options, env, self) {

        const token = tokens[idx]
        const src = token.attrGet('src')

        token.attrSet(
          'style',
          'cursor: zoom-in; max-width:100%;'
        )

        token.attrSet(
          'onclick',
          `
          const existing = document.getElementById('wk-image-overlay');
          if(existing) existing.remove();

          const overlay = document.createElement('div');
          overlay.id = 'wk-image-overlay';

          overlay.style.cssText = \`
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.88);
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:99999;
            padding:20px;
            cursor:zoom-out;
            overflow:hidden;
            backdrop-filter:blur(3px);
          \`;

          // CLOSE BUTTON
          const closeBtn = document.createElement('div');
          closeBtn.innerHTML = '&times;';

          closeBtn.style.cssText = \`
            position:absolute;
            top:20px;
            right:25px;
            color:#fff;
            font-size:42px;
            font-weight:bold;
            cursor:pointer;
            z-index:100000;
            line-height:1;
            user-select:none;
          \`;

          closeBtn.onclick = () => {
            overlay.remove();
          };

          const img = document.createElement('img');
          img.src = "${src}";

          img.style.cssText = \`
            max-width:95%;
            max-height:95%;
            border-radius:12px;
            transition:transform .15s ease;
            cursor:zoom-in;
            will-change:transform;
            user-select:none;
          \`;

          let scale = 1;

          // SCROLL ZOOM
          overlay.onwheel = (e) => {
            e.preventDefault();

            scale += e.deltaY * -0.001;
            scale = Math.min(Math.max(1, scale), 5);

            img.style.transform = 'scale(' + scale + ')';
          };

          // DOUBLE CLICK ZOOM
          img.ondblclick = () => {
            scale = scale === 1 ? 2 : 1;
            img.style.transform = 'scale(' + scale + ')';
          };

          overlay.appendChild(closeBtn);
          overlay.appendChild(img);

          document.body.appendChild(overlay);

          // CLOSE WHEN CLICKING OUTSIDE IMAGE
          overlay.onclick = (e) => {
            if (e.target === overlay) {
              overlay.remove();
            }
          };

          // ESC CLOSE
          document.onkeydown = (e) => {
            if (e.key === 'Escape') {
              overlay.remove();
            }
          };
          `
        )

        return defaultImage(tokens, idx, options, env, self)
      }


      // CLICKABLE IMAGE SUPPORT [![img](url)](url)
      const defaultLink =
        md.renderer.rules.link_open ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options)
        }

      md.renderer.rules.link_open = function (
        tokens,
        idx,
        options,
        env,
        self
      ) {

        const token = tokens[idx]
        const nextToken = tokens[idx + 1]

        if (nextToken && nextToken.type === 'image') {

          const src = nextToken.attrGet('src')

          token.attrSet('href', 'javascript:void(0)')

          token.attrSet(
            'onclick',
            `
            event.preventDefault();

            const existing = document.getElementById('wk-image-overlay');
            if(existing) existing.remove();

            const overlay = document.createElement('div');
            overlay.id = 'wk-image-overlay';

            overlay.style.cssText = \`
              position:fixed;
              inset:0;
              background:rgba(0,0,0,0.88);
              display:flex;
              align-items:center;
              justify-content:center;
              z-index:99999;
              padding:20px;
              cursor:zoom-out;
              overflow:hidden;
              backdrop-filter:blur(3px);
            \`;

            // CLOSE BUTTON
            const closeBtn = document.createElement('div');
            closeBtn.innerHTML = '&times;';

            closeBtn.style.cssText = \`
              position:absolute;
              top:20px;
              right:25px;
              background:#0c7484;
              color:#fff;
              width:50px;
              height:50px;
              border-radius:50%;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:32px;
              font-weight:bold;
              cursor:pointer;
              z-index:100000;
              line-height:1;
              user-select:none;
              box-shadow:0 4px 12px rgba(0,0,0,0.35);
            \`;

            closeBtn.onclick = () => {
              overlay.remove();
            };

            const img = document.createElement('img');
            img.src = "${src}";

            img.style.cssText = \`
              max-width:95%;
              max-height:95%;
              border-radius:12px;
              transition:transform .15s ease;
              cursor:zoom-in;
              will-change:transform;
              user-select:none;
            \`;

            let scale = 1;

            // SCROLL ZOOM
            overlay.onwheel = (e) => {
              e.preventDefault();

              scale += e.deltaY * -0.001;
              scale = Math.min(Math.max(1, scale), 5);

              img.style.transform = 'scale(' + scale + ')';
            };

            // DOUBLE CLICK ZOOM
            img.ondblclick = () => {
              scale = scale === 1 ? 2 : 1;
              img.style.transform = 'scale(' + scale + ')';
            };

            overlay.appendChild(closeBtn);
            overlay.appendChild(img);

            document.body.appendChild(overlay);

            // CLOSE WHEN CLICKING OUTSIDE IMAGE
            overlay.onclick = (e) => {
              if (e.target === overlay) {
                overlay.remove();
              }
            };

            // ESC CLOSE
            document.onkeydown = (e) => {
              if (e.key === 'Escape') {
                overlay.remove();
              }
            };
            `
          )
        }

        return defaultLink(tokens, idx, options, env, self)
      }
    }
  },

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
            },
            {
              text: 'Auction API Documentation',
              link: '/guide/auction-API-Documentation'
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