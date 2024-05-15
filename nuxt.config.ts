import type { NuxtConfig } from 'nuxt/schema';

const defaultConfig: NuxtConfig = {
  extends: [['github:matter-labs/docs-nuxt-template', { install: true }]],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint'],
  runtimeConfig: {
    public: {
      app: 'sdk',
    },
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(defaultConfig);
