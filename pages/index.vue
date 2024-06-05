<template>
  <UPageError
    :status="200"
    name="SDK Docs"
    message="This is not the page you are looking for. 👋"
    :clear-button="{
      label: 'Go to SDK Landing Page',
      to: '/sdk',
    }"
  />
</template>
