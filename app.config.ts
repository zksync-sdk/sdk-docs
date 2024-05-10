/**
 * Nuxt App Configuration that allows for runtime editing.
 * This content can be accessible in components with the
 * globally available `useAppConfig()`.
 */
export default defineAppConfig({
  seo: {
    siteName: 'ZKsync SDK Docs',
  },
  header: {
    logo: {
      alt: '',
      light: '/logos/zksync_logo_black.svg',
      dark: '/logos/zksync_logo.svg',
    },
    links: [
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/zksync-sdk/sdk-docs',
        target: '_blank',
        'aria-label': 'ZKsync SDK Docs on GitHub',
        title: 'ZKsync SDK Docs on GitHub',
      },
    ],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/zksync-sdk/sdk-docs/edit/staging/content',
    },
  },
});
