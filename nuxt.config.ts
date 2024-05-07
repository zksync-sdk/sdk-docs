import { getIconCollections } from '@egoist/tailwindcss-icons';
import { zksyncIcons } from './assets/zksync-icons';

const landingPage = '/sdk';

const defaultConfig: any = {
  extends: ['@nuxt/ui-pro', ['github:zkSync-Community-Hub/docs-nuxt-layer#staging', { install: true }]],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/fonts', 'nuxt-og-image'],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components: any) => {
      const globals = components.filter((c: any) => ['UButton', 'UIcon'].includes(c.pascalName));

      globals.forEach((c: any) => (c.global = true));
    },
  },
  ui: {
    icons: {
      collections: {
        ...zksyncIcons,
        ...getIconCollections(['heroicons', 'simple-icons']),
      },
    },
  },
  routeRules: {},
  devtools: {
    enabled: true,
  },
  typescript: {
    strict: false,
  },
  content: {
    highlight: {
      langs: [
        'solidity',
        'go',
        'jsx',
        'swift',
        'python',
        'rust',
        'toml',
        'java',
        'xml',
        'graphql',
        'groovy',
        'asm',
        'c++',
      ],
      theme: {
        default: 'github-light',
        light: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai',
      },
    },
    head: {
      sdk: {
        '10.js': 'JavaScript',
      },
    },
  },
  nitro: {
    firebase: {
      gen: 2,
    },
    prerender: {
      routes: ['/sdk'],
    },
  },
};

if (process.env.DEV) {
  defaultConfig.routeRules = {
    '/': { redirect: landingPage },
    ...defaultConfig.routeRules,
  };
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(defaultConfig);
