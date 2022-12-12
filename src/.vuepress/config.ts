const { description } = require('../../package')

// https://github.com/vuepress/vuepress-next/blob/98b7a57856c7b81a82291642e3cf7218699f3523/packages/%40vuepress/markdown/src/utils/slugify.ts
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

module.exports = {
    locales: {
    '/': {
        lang: 'en-US',
        title: 'GaGaNode',
        description: description,
    },
    },

    head: [
        ['meta', { name: 'theme-color', content: '#fff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: '/logo.svg' }]
    ],

    markdown: {
        extractHeaders: {
            level: [1, 2, 3, 4, 5],
        },
        anchor: {
            slugify: (str) => str
                .normalize('NFKD')
                // Remove accents
                .replace(rCombining, '')
                // Remove control characters
                .replace(rControl, '')
                // Replace special characters
                .replace(rSpecial, '-')
                // Remove continuos separators
                .replace(/-{2,}/g, '-')
                // Remove prefixing and trailing separators
                .replace(/^-+|-+$/g, '')
                // ensure it doesn't start with a number (#121)
                // .replace(/^(\d)/, '_$1')
                // lowercase
                .toLowerCase()
        }
    },

    plugins: [
        '@vuepress/plugin-shiki',
        '@vuepress/plugin-search',
        ['@vuepress/plugin-google-analytics', {
            id: 'G-SEH5LFSBRP',
        }],
    ],

    themeConfig: {
        sidebarDepth: 0,
        contributors: false,
        logo: '/logo.svg',
        themePlugins: {
            activeHeaderLinks: false,
        },
        locales: {
            '/': {
              selectLanguageName: 'English',
              navbar: [
                {
                    text: 'Home',
                    link: 'https://gaganode.com/',
                },
                {
                    text: 'Guide',
                    link: '/',
                },
                {
                    text: 'Meson Network',
                    link: 'https://meson.network/',
                },
                {
                    text: 'Resources',
                    children: [
                        {
                            text: 'Whitepaper',
                            link: 'https://docs.meson.network/Meson-Network-Whitepaper-v1.6.pdf'
                        },
                        {
                            text: 'GitHub',
                            link: 'https://github.com/gaganode'
                        },
                        {
                            text: 'Status',
                            link: 'https://status.meson.network'
                        },
                        {
                            text: 'Media Kit',
                            link: 'https://github.com/daqnext/brand-kit'
                        },
                        {
                            text: '🧱 Glossary',
                            link: '/glossary.md',
                        },
                    ]
                },
                {
                    text: 'Social Media',
                    children: [
                        {
                            text: 'Blog',
                            link: 'https://blog.meson.network'
                        },
                        {
                            text: 'Twitter',
                            link: 'https://twitter.com/NetworkMeson'
                        },
                        {
                            text: 'Medium',
                            link: 'https://medium.com/meson-network'
                        },
                        {
                            text: 'Discord',
                            link: 'https://discord.gg/z6YfSHDkmS'
                        },
                        {
                            text: 'Telegram',
                            link: 'https://t.me/mesonnetwork'
                        },
                        {
                            text: 'Content2049',
                            link: 'https://content2049.meson.network'
                        },
                        {
                            text: 'YouTube',
                            link: 'https://www.youtube.com/c/MesonNetwork'
                        },
                    ]
                },
            ],
            sidebar: {
                '/': [
                    {
                        text: '👋 Guide',
                        collapsible: true,
                        link: '/README.md',
                        children: [
                            '/README.md',
                        ],
                    },
                    {
                        text: '🦆 GaGaNode Credit',
                        collapsible: true,
                        link: '/gaganode-credit.md',
                    },
                    {
                        text: '🚀 Run GaGa Nodes',
                        collapsible: true,
                        link: '/running/how-to-run-gaganode-on-windows.md',
                        children: [
                            '/running/how-to-run-gaganode-on-windows.md',
                            '/running/how-to-run-gaganode-on-android.md',
                            '/running/how-to-run-gaganode-on-linux.md',
                            '/running/how-to-run-gaganode-on-macos.md',
                            '/running/how-to-run-gaganode-on-raspberry-pi.md',
                            '/running/how-to-run-gaganode-on-openwrt.md',
                            '/running/how-to-run-gaganode-on-arm-sbc.md',
                            '/running/how-to-run-gaganode-on-android-tv.md',
                        ],
                    },
                    {
                        text: '🪶 SDK Integration',
                        collapsible: true,
                        link: '/sdk/android-sdk.md',
                        children: [
                            '/sdk/android-sdk.md',
                            '/sdk/windows-sdk.md',
                            '/sdk/linux-sdk.md',
                            '/sdk/macos-sdk.md',
                        ],
                    },
                    {
                        text: '🌱 FAQ ',
                        collapsible: true,
                        link: '/faq.md',
                    },
                ],
            },
            },
          },
    },
}
