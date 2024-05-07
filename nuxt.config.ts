const landingPage = '/sdk';

const defaultConfig: any = {
  extends: ['@nuxt/ui-pro', ['github:zkSync-Community-Hub/docs-nuxt-layer#staging', { install: true }]],
  content: {
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
