export default defineNuxtPlugin({
  name: 'my-plugin',
  enforce: 'pre', // or 'post'
  async setup (nuxtApp) {
		// this is the equivalent of a normal functional plugin
		nuxtApp.provide('hello', (name: string) => `Hello ${name}!`)
  },
  hooks: {
    // You can directly register Nuxt app hooks here
    'app:created'() {
      const nuxtApp = useNuxtApp()
    }
  }
})