import type { NuxtConfig } from 'nuxt/schema';

const landingPage = '/sdk';

const defaultConfig: NuxtConfig = {
  extends: [['github:matter-labs/docs-nuxt-template', { install: true }]],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint'],
  nitro: {
    prerender: {
      routes: ['/sdk'],
    },
  },
};

defaultConfig.routeRules = {
  '/': { redirect: landingPage },
  ...defaultConfig.routeRules,
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(defaultConfig);
