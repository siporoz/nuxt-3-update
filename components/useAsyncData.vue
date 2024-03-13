<template>
	<div>

	</div>
</template>

<script setup lang="ts">
const { data: discounts, pending } = await useAsyncData('cart-discount', async () => {
  const [coupons, offers] = await Promise.all([
    $fetch('/cart/coupons'),
    $fetch('/cart/offers')
  ])

  return { coupons, offers }
})
</script>

<style scoped>

</style>