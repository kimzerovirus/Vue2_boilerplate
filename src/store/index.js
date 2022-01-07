import Vue from 'vue';
import Vuex from 'vuex';
import { testApi } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		alertData: {
			isAlert: false,
			text: '',
		},
		list: [],
	},
	getters: {},
	mutations: {
		alertToggle(state, alertData) {
			state.alertData.isAlert = alertData.isAlert;
			if (alertData.text) state.alertData.text = alertData.text;
		},
		updateState(state, payload) {
			Object.keys(payload).forEach(key => {
				state[key] = payload[key];
			});
		},
	},
	actions: {
		async LIST({ commit }) {
			const { data } = await testApi();
			commit('updateState', {
				list: data,
			});
		},
	},
	modules: {},
});
