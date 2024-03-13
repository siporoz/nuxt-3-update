<script setup lang="ts">
import useStateComponent from './useStateComponent.vue'

const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>

		<useStateComponent />
  </div>
</template>