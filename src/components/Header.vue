<template lang="pug">
header.header
	.header__top
		.container-fluid
			.header__wrapper
				.header__link(@click="goBack")
					img.header__img_back(src="assets/img/icons/back.svg")
				router-link.header__link(to="/")
					img.header__img_logo(src="assets/img/icons/lay.svg" @click="fullHeightAlways")
				.header__link(@click="fullHeight")
					img.header__img_burger(src="assets/img/icons/burger.svg" v-b-tooltip.hover title="Menu")
	.header__bottom(v-bind:class="{full: isFull}")
		.container-fluid
			.header__menu(@click="fullHeight")
				nav.header__menu-nav
					ul.header__menu-ul
						li.header__menu-li
							router-link.header__menu-link(to="/") Все объекты
						li.header__menu-li
							router-link.header__menu-link(to="/params") Подобрать по параметрам


</template>

<script>
export default {
	name: 'Header',
	data () {
		return {
			isFull: false
		}
	},
	methods: {
		fullHeight() {
			this.isFull ? this.isFull = false : this.isFull =  true
		},
		fullHeightAlways() {
			this.isFull = false
		},
		goBack () {
			this.fullHeightAlways()
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped lang="sass">
.header

	&__top
		position: fixed
		width: 100%
		height: 70px
		box-shadow: 0 0 3px rgba(#000, .3)
		overflow: hidden
		background: $gray-0
		z-index: 999

	&__wrapper
		height: 70px
		display: flex
		flex-direction: row
		justify-content: space-between
		text-align: center

	&__link
		height: 100%
		display: flex
		flex-direction: column
		justify-content: center

		img
			transition-duration: .3s

		&:hover
			img
				transform: translateY(2px)

	&__img

		&_back, &_burger
			height: 30px

		&_logo
			height: 52px

	&__bottom
		position: fixed
		top: 70px
		left: -100%
		width: 100%
		height: auto
		min-height: 100vh
		overflow: auto
		transition-duration: .5s
		background: $gray-0
		z-index: 998

		@media only screen and (max-width : 767px)
			overflow: auto

	&__menu
		margin-top: 35px
		font-size: 16px
		font-weight: 700
		text-transform: uppercase
		color: #fff

		&-li
			margin-bottom: 20px

		&-link
			display: block
			text-align: center
			color: #fff

			&:hover,&:focus
				color: $gray-2

.full
	left: 0


</style>