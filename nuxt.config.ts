import type { NuxtConfig } from 'nuxt/schema';

const landingPage = '/sdk';

const defaultConfig: NuxtConfig = {
  extends: [['github:matter-labs/docs-nuxt-template#development', { install: true }]],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/fonts', 'nuxt-og-image', '@nuxt/eslint'],
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
