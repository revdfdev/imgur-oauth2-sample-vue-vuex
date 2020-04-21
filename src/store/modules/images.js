import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: [],
    error: null
}

const getters = {
    allImages: state => state.images,
}

const actions = {
    fetchImages: async ({ rootState, commit }) => {
        try {
            console.log(JSON.stringify(rootState, null, 3));
            const response = await api.fetchImages(rootState.auth.token);
            const { data } = response.data;
            if (data.length === 0) throw new Error('No images found');
            commit('setImages', data);
        } catch (error) {
            commit('setError', error.message);
        }
    },
    uploadImage: async ({ commit, rootState }, files) => {
        const  { token } = rootState.auth;
        console.log(token);
        try {
            await api.upload(files, token);
            router.push('/');
        } catch (error) {
            commit('setError', error.message);
        }
    }
}

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    },
    setError: (state, error) => {
        state.error = error;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}