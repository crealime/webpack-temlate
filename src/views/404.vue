<template lang="pug">
section.not-found
	.container-fluid
		h1.not-found__h1 {{ messageError }}
		router-link.not-found__link(to="/") Перейти в начало
</template>

<script>
export default {
name: "404",
data () {
	return {
		messageError: 'Данный раздел не существует'
	}
}
}
</script>

<style scoped lang="sass">
.not-found
	margin-top: 100px
	text-align: center
</style>