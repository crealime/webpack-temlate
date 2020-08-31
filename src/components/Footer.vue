<template lang="pug">
footer.footer
	.container-fluid
		.row
			.col-md-6
				a.footer__link.button Подобрать по параметрам
			.col-md-6
				a.footer__link.button Создать собственную конфигурацию квартиры
			.col-12
				h3.footer__h3 Центральный отдел продаж
				.footer__contacts
					a.footer__tel(href="tel:+380662211122") +38 (066) 22-111-22
					a.footer__tel(href="tel:+380682211122") +38 (068) 22-111-22

</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped lang="sass">
.footer
	//margin-top: 10px
	box-shadow: 0 0 3px rgba(#000, .3)
	background: $gray-0
	z-index: 99
	margin-top: 10px
	padding: 40px 0 24px

	&__link
		margin-bottom: 20px

	&__tel
		display: block
		margin-bottom: 8px
		font-size: 18px
		font-weight: 700
		text-align: center
		color: $orange-1

		&:hover
			color: $orange-2

</style>