// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [['github:matter-labs/docs-nuxt-template', { install: true }]],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint'],
  site: {
    name: 'zkSync SDK Docs',
    url: process.env.NUXT_SITE_ENV ? 'https://staging-sdk-docs.zksync.io' : 'https://docs.zksync.io',
  },
  runtimeConfig: {
    public: {
      app: 'sdk',
    },
  },
});
