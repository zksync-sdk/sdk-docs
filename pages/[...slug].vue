<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo';

const route = useRoute();
const category = useCategory();
const { toc, seo } = useAppConfig();

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  () =>
    queryContent()
      .where({ _partial: false, _extension: 'md', navigation: { $ne: false } })
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

const links = computed(() =>
  [
    {
      icon: 'i-heroicons-pencil-square',
      label: 'Edit this page',
      to: `https://github.com/zksync-sdk/sdk-docs/edit/main/content/${page?.value?._file}`,
      target: '_blank',
    },
    {
      icon: 'i-heroicons-chat-bubble-oval-left-ellipsis',
      label: 'Share feedback',
      to: `https://github.com/zksync-sdk/sdk-docs/issues/new?&template=feedback.yml&page=https://sdk.zksync.io${page?.value?._path}&title=[Feedback]%3A%20`,
      target: '_blank',
    },
    {
      icon: 'i-heroicons-chat-bubble-bottom-center-text',
      label: 'FAQ',
      to: `/faq`,
    },
    {
      icon: 'i-heroicons-book-open',
      label: 'Glossary',
      to: `/glossary`,
    },
    {
      icon: 'i-heroicons-shield-check',
      label: 'Troubleshooting',
      to: `/troubleshooting`,
    },
    ...(toc?.bottom?.links || []),
  ].filter(Boolean)
);
</script>

<template>
  <UPage v-if="page">
    <article>
      <span
        id="docsearch-lv0"
        hidden
        >{{ category }}</span
      >
      <UPageHeader
        :headline="category"
        :title="page.title"
        :description="page.description"
        :links="page.links"
      />

      <UPageBody prose>
        <ContentRenderer
          v-if="page.body"
          :value="page"
        />
        <hr v-if="surround?.length" />

        <UContentSurround :surround="surround" />
      </UPageBody>
    </article>
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
