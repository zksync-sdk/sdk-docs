<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types';

const nav = inject<Ref<NavItem[]>>('navigation', ref([]));

const navigation = computed(() => nav!.value.find((item) => item._path.startsWith('/sdk'))?.children || []);
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UNavigationTree
            :links="mapContentNavigation(navigation)"
            default-open
            :multiple="false"
          />
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>
