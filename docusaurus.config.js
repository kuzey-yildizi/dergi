// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kuzey yıldızı',
  tagline: 'edebiyat dergisi',
  favicon: 'img/ky01_01_atayuludokumaci.png',

  // Set the production url of your site here
  url: 'https://kuzey-yildizi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kuzey-yildizi', // Usually your GitHub org/user name.
  projectName: 'dergi', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/ky01_01_atayuludokumaci.png',
      navbar: {
        logo: {
          alt: 'Kuzey Yıldızı Logo',
          src: 'img/ky01_01_atayuludokumaci.png',
        },
        items: [
          {
            label: 'kuzey yıldızı edebiyat dergisi',
            to: '/dergi',
          },
          {
            label: 'özge dirik kitabı',
            to: '/ozge.dirik.kitabi',
          },
          {
            label: 'pdf dosyaları',
            to: '/pdf',  
          },
          {
            to: '/blog', 
            label: 'duyurular', 
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Hızlı Erişim',
            items: [
              {
                label: 'dergi',
                to: '/',
              },
              {
                label: 'özge dirik kitabı',   
                to: '/ozge.dirik.kitabi',
              },
              {
                label: 'pdf dosyaları',
                to: '/pdf',
              },
            ],
          },
          {
            title: 'Sosyal Medya',
            items: [
              {
                label: 'x',
                href: 'https://x.com/kuzeyyildizi',
              },
              {
                label: 'facebook',
                href: 'https://www.facebook.com/kuzeyyildiziedebiyatdergisi',
              },
              {
                label: 'instagram',
                href: 'https://www.instagram.com/kuzeyyildiziedebiyatdergisi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kuzey Yıldızı Edebiyat Dergisi.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['tr'],
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        searchBarPosition: 'right',
        docsRouteBasePath: '/',
        blogRouteBasePath: '/docs',
        searchResultLimits: 6,
      }),
    ],
  ],
};

export default config;

