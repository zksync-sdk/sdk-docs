<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types';

const nav = inject<Ref<NavItem[]>>('navigation', ref([]));

const navigation = computed(() => nav!.value.find((item) => item._path.startsWith('/sdk'))?.children || []);

// Log the links that were previously passed to the UNavigationTree component:
console.log({ navigationLinks: mapContentNavigation(navigation.value) });

// New custom links we want to pass:
const customNavigation = computed(() => [
  {
    label: 'Quickstart',
    to: '/sdk',
    children: [
      {
        label: 'Introduction',
        to: '/sdk',
      },
      {
        label: 'Why zksync-Era SDKs',
        to: '/sdk/why-zksync-era-sdk',
      },
      {
        label: 'Compatibility',
        to: '/sdk/compatibility',
      },
    ],
  },
  {
    label: 'JavaScript',
    to: '/sdk/js/ethers',
    children: [
      {
        label: 'Overview',
        to: '/sdk/js/ethers/v5/getting-started',
      },
      {
        label: 'Getting Started',
        to: '/sdk/js/ethers/v6/getting-started',
      },
      {
        label: 'ZkSync-Era Features',
        to: '/sdk/js/ethers/v6/features',
      },
      {
        label: 'Front-end Integration',
        to: '/sdk/js/ethers/v6/front-end',
      },
      {
        label: 'Provider',
        to: '/sdk/js/ethers/v6/providers',
      },
      {
        label: 'Front-end Integration',
        to: '/sdk/js/ethers/v6/front-end',
      },
    ],
  },
  {
    label: 'Golang',
    to: '/sdk/go/getting-started',
    children: [
      {
        label: 'Overview',
        to: '/sdk/js/ethers/v5/getting-started',
      },
      {
        label: 'Getting Started',
        to: '/sdk/js/ethers/v6/getting-started',
      },
      {
        label: 'ZkSync-Era Features',
        to: '/sdk/js/ethers/v6/features',
      },
    ],
  },
  {
    label: 'Python',
    to: '/sdk/python/getting-started',
    children: [
      {
        label: 'Overview',
        to: '/sdk/js/ethers/v5/getting-started',
      },
      {
        label: 'Getting Started',
        to: '/sdk/js/ethers/v6/getting-started',
      },
      {
        label: 'ZkSync-Era Features',
        to: '/sdk/js/ethers/v6/features',
      },
    ],
  },
  {
    label: 'Java',
    to: '/sdk/python/getting-started',
    children: [
      {
        label: 'Overview',
        to: '/sdk/js/ethers/v5/getting-started',
      },
      {
        label: 'Getting Started',
        to: '/sdk/js/ethers/v6/getting-started',
      },
      {
        label: 'ZkSync-Era Features',
        to: '/sdk/js/ethers/v6/features',
      },
    ],
  },
  {
    label: 'Swift',
    to: '/sdk/python/getting-started',
    children: [
      {
        label: 'Overview',
        to: '/sdk/js/ethers/v5/getting-started',
      },
      {
        label: 'Getting Started',
        to: '/sdk/js/ethers/v6/getting-started',
      },
      {
        label: 'ZkSync-Era Features',
        to: '/sdk/js/ethers/v6/features',
      },
    ],
  },
  {
    label: 'Rust',
    to: '/sdk/python/getting-started',
    children: [
      {
        label: 'Overview',
        to: '/sdk/js/ethers/v5/getting-started',
      },
      {
        label: 'Getting Started',
        to: '/sdk/js/ethers/v6/getting-started',
      },
      {
        label: 'ZkSync-Era Features',
        to: '/sdk/js/ethers/v6/features',
      },
    ],
  },
]);

// Links we want to show on JS page
const jsLinks = ['Quickstart', 'JavaScript'];

// Filter all links we have to be just the links we want to show on JS page
const mapCustomNavigationBasedOnPath = () => {
  // 1. Get the path from the url, example: "/sdk" or "/sdk/js/ethers" or something else...
  const route = useRoute();
  // 2. Check the current path
  if (route.fullPath === '/sdk/js/ethers') {
    // 2.1 If it's the current path, filter the customNavigation so it only shows the links included in jsLinks array
    return customNavigation.value.filter((path) => jsLinks.includes(path.label));
  } else {
    // 2.2 If the path is not JS path, return the full customNavigation array
    return customNavigation.value;
  }
};
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <div class="mb-6">
            <SdkSelector />
          </div>
          <UNavigationTree
            :links="mapCustomNavigationBasedOnPath()"
            default-open-all
            :multiple="false"
          />
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>
