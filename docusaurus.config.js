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
  baseUrl: '/dergi/',
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
        title: 'kuzey yıldızı',
        logo: {
          alt: 'Kuzey Yıldızı Logo',
          src: 'img/ky01_01_atayuludokumaci.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'dergiSidebar',
            position: 'left',
            label: 'dergi',
            to: '/',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ozgedirikkitabiSidebar',
            position: 'left',
            label: 'özge dirik kitabı',
            to: '/ozge.dirik.kitabi',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pdfdosyalariSidebar',
            position: 'left',
            label: 'pdf dosyaları',
            to: '/pdf',  
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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kuzey Yıldızı Edebiyat Dergisi. PK 200 34711 Kadıköy / İstanbul`,
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

