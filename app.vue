<script setup lang="ts">
await callOnce(async () => {
  console.log('Хук вызовится один раз!')
})
</script>

<template>
  <div>
		<NuxtPage />
  </div>
</template>
