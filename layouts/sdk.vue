<script setup lang="ts">
const route = useRoute();

const { data: navigation } = await useAsyncData(`${route.path}-sidenav`, () => {
  const query = queryContent().where({
    _path: { $contains: route.path },
    _extension: 'md',
    _partial: false,
  });

  return fetchContentNavigation(query);
});
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
