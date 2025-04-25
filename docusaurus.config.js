// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CCNDA SDK 及 API文件',
  tagline: '「祂的量帶通遍天下，祂的言語傳到地極」詩篇 19:4',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.ccnda.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CCNDA', // Usually your GitHub org/user name.
  projectName: 'docs.ccnda.org', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/ccnda/docs.ccnda.org/edit/main/',
          // 顯示最後更新時間
          // showLastUpdateTime: true,
          // 顯示最後更新作者
          showLastUpdateAuthor: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-D2ZDPY0HD5',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo2.png',
      navbar: {
        title: 'CCNDA Docs',
        logo: {
          alt: 'CCNDA Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'API 文件',
          },
          {
            href: 'https://www.ccnda.org',
            label: '協會首頁',
            position: 'right',
          },
        ],
      },
      // 程式碼區塊設定
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml'],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '開發資源',
            items: [
              {
                label: 'CCNDA Dev Day',
                href: 'https://dev.ccnda.org',
              },
            ],
          },
          {
            title: '我們的服務',
            items: [
              {
                label: 'Oursweb 我們的網站',
                href: 'https://oursweb.net',
              },
              {
                label: '台灣聖經網',
                href: 'https://taiwanbible.com',
              },
              {
                label: '愛諾園',
                href: 'https://loveuno.com',
              },
              {
                label: '智慧聖經搜尋',
                href: 'https://biblesearch.com.tw',
              },
              {
                label: '華人教會名錄',
                href: 'https://church.oursweb.net',
              },
              {
                label: '活動訊息佈告',
                href: 'https://event.oursweb.net',
              },
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: '奉獻支持',
                href: 'https://www.ccnda.org/devote/online',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} 中華基督教網路發展協會 Chinese Christian Network Development Association`,
      },
    }),
};

export default config;
