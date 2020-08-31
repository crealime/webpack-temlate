<template lang="pug">
	#app
		.wrapper
			Header
			.content
				router-view
			Footer
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
}
</script>

<style lang="sass">

</style>
