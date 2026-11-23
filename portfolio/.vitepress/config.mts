import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "疾風の部屋",
  description: "Portfolio",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Profile', link: '/profile' },
      { text: 'Skills', link: '/skills' },
      { text: 'Software', link: '/software' },
      { text: 'Links', link: '/links' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: 'Profile', link: '/profile' },
          { text: 'Skills', link: '/skills' },
          { text: 'Software', link: '/software' },
          { text: 'Links', link: '/links' }
        ]
      },
      {
        text: 'Contact',
        items: [
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/hayatedayon' },
      { icon: 'instagram', link: 'https://www.instagram.com/hayatedayon/' },
      { icon: 'github', link: 'https://github.com/hayatedayon' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCPFxv2BkMcA_BIubJKvftwA' }
    ]
  }
})
