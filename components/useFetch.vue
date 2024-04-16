<script setup lang="ts">

const someReqValue = ref(1)

// SSR frendly
const { data, pending, error, refresh } = await useFetch('https://jsonplaceholder.typicode.com/todos/1', {
  pick: ['userId', 'id', 'title'], // pick value from responce
	// server: false - отключает запрос на стороне сервера no SSR

	lazy: true, // - whether to resolve the async function after loading the route, instead of blocking client-side navigation
	// immediate: false // will prevent the request from firing immediately
	default: () => {userId: 1},
	transform: (res) => {
		console.log(res)
		return {
			userId: 4,
			title: 'EPT'
		}
	},
	dedupe: 'defer', // - при включеном флаге можно будет делать только 1 запрос в моменте, остальные вызовы отсеются (cancel - стандартное значение)
	watch: [someReqValue] // - список значений при изменении который будет сделан новый запрос
})

onMounted(() => {
	setTimeout(() => {
		someReqValue.value += 1
	}, 4000)
})
</script>

<template>
	<div>
		<p>{{ pending }}</p>

		{{ data }}

		<button @click="refresh">презапросить</button>
	</div>
</template>