<template>
	<div>
		console
	</div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()

console.log(nuxtApp.$hello('name'))
</script>

<style scoped>
</style>