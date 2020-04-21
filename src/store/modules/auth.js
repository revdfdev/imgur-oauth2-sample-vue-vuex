import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: sessionStorage.getItem('imgur_token'),
}

const getters = {
    isLoggedin: state => !!state.token
}

const actions = {
	login: () => {
		api.login();
	},
    logout: ({ commit }) => {
        commit('setToken', null)
        sessionStorage.removeItem('imgur_token');
        router.push('/');
    },
    finalizeLogin: ({ commit }, hash) => {
        const query = hash.replace('#', '');
        const result = qs.parse(query);
        commit('setToken', result.access_token);
        sessionStorage.setItem('imgur_token', result.access_token)
        router.push('/');
    }
}

const mutations = {
    setToken: (state, token) => {
        state.token = token
    } 
}

export default {
	state,
	getters,
	actions,
	mutations
}