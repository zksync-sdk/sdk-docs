<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types';
import SdkSelector from '~/component/sdk-selector.vue';

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
    to: '/sdk/java/getting-started',
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
    to: '/sdk/swift/getting-started',
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
    to: '/sdk/rust/getting-started',
    children: [
      {
        label: 'Overview',
        to: '/sdk/rust/getting-started',
      },
      {
        label: 'Contract Deployment and Interaction',
        to: '/sdk/rust/contract-deployment-and-interaction',
      },
      {
        label: 'ZkSync-Era Features',
        to: '/sdk/js/ethers/v6/features',
      },
    ],
  },
]);

const jsLinks = ['Quickstart', 'JavaScript'];
const golangLinks = ['Quickstart', 'Golang'];
const pythonLinks = ['Quickstart', 'Python'];
const javaLinks = ['Quickstart', 'Java'];
const swiftLinks = ['Quickstart', 'Swift'];
const rustLinks = ['Quickstart', 'Rust'];

const mapCustomNavigationBasedOnPath = () => {
  const route = useRoute();
  if (route.fullPath === '/sdk/js/ethers') {
    return customNavigation.value.filter((path) => jsLinks.includes(path.label));
  } else if (route.fullPath === '/sdk/go/getting-started') {
    return customNavigation.value.filter((path) => golangLinks.includes(path.label));
  } else if (route.fullPath === '/sdk/python/getting-started') {
    return customNavigation.value.filter((path) => pythonLinks.includes(path.label));
  } else if (route.fullPath === '/sdk/java/getting-started') {
    return customNavigation.value.filter((path) => javaLinks.includes(path.label));
  } else if (route.fullPath === '/sdk/swift/getting-started') {
    return customNavigation.value.filter((path) => swiftLinks.includes(path.label));
  } else if (route.fullPath === '/sdk/rust/getting-started') {
    return customNavigation.value.filter((path) => rustLinks.includes(path.label));
  } else {
    return customNavigation.value;
  }
};
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <div class="mb-6"><SdkSelector /></div>
          <UNavigationTree
            :links="mapCustomNavigationBasedOnPath()"
            default-open
            :multiple="false"
          />
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>
