<template lang="pug">
	.rc-list
		.container-fluid
			.row
				template(v-if="isExist")
					.col-md-6.col-xl-4(v-for="(item, index) in list")
						RCItem(:list="item")

				template(v-else="isExist")
					.col {{ messageError }}

</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import RCItem from "@/components/RCItem"
export default {
	name: 'Home',
	props: {
	},
	data () {
		return {
			messageError: 'Не удалось загрузить жилые комплексы',
			list: []
		}
	},
	components: {
		RCItem
	},
	mounted() {
		this.fetchRCList()
	},
	methods: {
		...mapActions('storeRCList', ['fetchRCList']),
	},
	computed: {
		...mapGetters('storeRCList', ['getRCList']),
		isExist() {
			this.list = this.getRCList
			return Boolean(Object.keys(this.getRCList).length)
		},
	}
}
</script>

<style scoped lang="sass">
.rc-list
	margin-top: 110px
	color: #fff
</style>
