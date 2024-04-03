import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "疾風の部屋",
  description: "Portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Profile', link: '/profile' },
      { text: 'Skills', link: '/skills' },
      { text: 'Links', link: '/links' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: 'Profile', link: '/profile' },
          { text: 'Skills', link: '/skills' },
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
