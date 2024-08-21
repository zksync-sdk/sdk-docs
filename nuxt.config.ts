// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [['@matterlabs/docs-nuxt-template']],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint', '@nuxtjs/seo', 'nuxt-gtag'],
  site: {
    name: 'ZKsync SDK Docs',
    url: process.env.NUXT_SITE_ENV ? 'https://staging-sdk-docs.zksync.io' : 'https://sdk.zksync.io',
  },
  runtimeConfig: {
    public: {
      app: 'sdk',
    },
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'remove',
      },
    },
  },
  $production: process.env.NUXT_SITE_ENV
    ? {}
    : {
        gtag: {
          id: 'G-32HFNYFHS9',
        },
      },
});
