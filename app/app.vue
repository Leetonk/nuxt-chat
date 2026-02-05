<script setup lang="ts">
const colorMode = useColorMode()
console.log(colorMode)
</script>
<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<style></style>
