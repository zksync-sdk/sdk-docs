<script setup lang="ts">
const { seo } = useAppConfig();

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
provide('navigation', navigation);

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  htmlAttrs: {
    lang: 'en',
  },
});

const seoDescription =
  'ZKsync SDK Docs is a collection of guides, references and resources on building with ZKsync SDKs.';

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogUrl: 'https://docs.zksync.io/',
  ogImageAlt: 'Hyperscaling Ethereum with ZK tech.',
  ogDescription: seoDescription,
  description: seoDescription,
  twitterDescription: seoDescription,
  twitterTitle: `%s`,
  twitterCard: 'summary_large_image',
  twitterSite: '@zksync',
  twitterCreator: '@zkSyncDevs',
  twitterImageAlt: 'Hyperscaling Ethereum with ZK tech.',
});

defineOgImage({
  component: 'OgImageZK',
  title: seo?.siteName,
  description: 'Access detailed guides, references and resources that will help you build with ZKsync SDKs.',
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <HeaderComponent />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <FooterComponent />

    <UNotifications />
  </div>
</template>
