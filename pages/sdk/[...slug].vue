<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';
import { withoutTrailingSlash } from 'ufo';

definePageMeta({
  layout: 'sdk',
});

const route = useRoute();
const { toc, seo } = useAppConfig();

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  () =>
    queryContent('/sdk')
      .where({ _extension: 'md', navigation: { $ne: false } })
      .only(['title', 'description', '_path'])
      .findSurround(withoutTrailingSlash(route.path)),
  { default: () => [] }
);

useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description,
  twitterDescription: page.value.description,
});

defineOgImage({
  component: 'OgImageZK',
  title: page.value.title,
  description: page.value.description,
});

const headline = computed(() => findPageHeadline(page.value as ParsedContent));

const links = computed(() =>
  [
    {
      icon: 'i-heroicons-pencil-square',
      label: 'Edit this page',
      to: `https://github.com/zksync-sdk/sdk-docs/edit/staging/content/${page?.value?._file}`,
      target: '_blank',
    },
    {
      icon: 'i-heroicons-chat-bubble-oval-left-ellipsis',
      label: 'Share feedback',
      to: `https://zksync.io/contact`,
      target: '_blank',
    },
    ...(toc?.bottom?.links || []),
  ].filter(Boolean)
);
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :headline="headline"
    />

    <UPageBody prose>
      <ContentRenderer
        v-if="page.body"
        :value="page"
      />

      <hr v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page.toc !== false"
      #right
    >
      <UContentToc
        :title="toc?.title"
        :links="page.body?.toc?.links"
      >
        <template
          v-if="toc?.bottom"
          #bottom
        >
          <div
            class="hidden space-y-6 lg:block"
            :class="{ '!mt-6': page.body?.toc?.links?.length }"
          >
            <UDivider
              v-if="page.body?.toc?.links?.length"
              type="dashed"
            />

            <UPageLinks
              :title="toc.bottom.title"
              :links="links"
            />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
