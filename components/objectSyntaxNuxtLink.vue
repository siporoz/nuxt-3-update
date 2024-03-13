<template>
	<div>
		<NuxtLink :to="{ name: 'some', query: { year: '2023' } }">
			Ссылка
		</NuxtLink>

		<button @click="some">
			кнопка
		</button>
	</div>
</template>

<script setup lang="ts">
function some() {
	console.log('some')
	try {
		const some = [] / 'f'
	} catch (e) {
		console.log('ffff');
	}
}
</script>

<style scoped>

</style>