import axios from 'axios'

const storeRCList = {
	namespaced: true,
	state: {
		list: {}
	},
	getters: {
		getRCList: state => {
			return state.list;
		}
	},
	mutations: {
		ADD_LIST(state, list) {
			state.list = list
		}
	},
	actions: {
		fetchRCList(context) {
			axios
				.get('assets/json/rclist.json')
				.then((response) => {
					context.commit('ADD_LIST', response.data)
				})

		}
	}
}

export default storeRCList