// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [['@matterlabs/docs-nuxt-template']],
  modules: ['nuxt-gtag'],
  site: {
    name: 'ZKsync SDK Docs',
    url: process.env.NUXT_SITE_ENV === 'production' ? 'https://sdk.zksync.io' : 'https://staging-sdk-docs.zksync.io',
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
  $production:
    process.env.NUXT_SITE_ENV === 'production'
      ? {
          gtag: {
            id: 'G-32HFNYFHS9',
          },
        }
      : { gtag: { enabled: false } },
});
