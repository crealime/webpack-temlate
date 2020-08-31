<template lang="pug">
		.rc-list__item
			.rc-list__img(:style="{backgroundImage: 'url(' + list.img + ')' }")
				.rc-list__address {{ list.address }}
			a.rc-list__link.button {{ list.title }}
			.rc-list__info
				table.rc-list__table
					tr
						td {{ list.params.amountName }}
						td {{ list.params.amount }}
					tr
						td {{ list.params.costName }}
						td {{ list.params.cost }}

</template>

<script>
export default {
name: "RCItem",
props: {
	list: {
		type: Object,
		required: true
	}
}
}
</script>

<style scoped lang="sass">
.rc-list

	&__item
		position: relative
		margin-bottom: 30px

	&__img
		position: relative
		height: 400px
		background-size: cover
		background-position: center center

	&__address
		position: absolute
		width: 100%
		bottom: 0
		left: 0
		padding: 20px
		font-size: 14px
		font-weight: 400
		text-align: center
		background: rgba($gray-3, .8)

	&__info
		margin-top: -0px
		background: rgba($gray-0, .5)
		padding: 0 15px 24px

	&__table
		width: 100%
		font-size: 14px
		color: $orange-1
		margin-top: 10px


		tr
			border-bottom: $gray-2 1px dashed

			td
				padding: 12px 0 4px

			td:nth-child(2n)
				text-align: right
				color: $white-1


</style>