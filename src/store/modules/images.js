import api from '../../api/imgur';

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
    uploadImage: ({ commit }) => {

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