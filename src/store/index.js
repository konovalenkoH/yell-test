import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: null,
    username: '',
  },
  getters: {
    getUsername: (state) => state.username,
    getJobsByName: (state) => (name) => {
      if (!name || !state.jobs) {
        return null;
      }

      return state.jobs.filter((item) => item.headline.includes(name));
    },
  },
  mutations: {
    setUsername(state, payload) {
      state.username = payload;
    },
    setJobs(state, payload) {
      state.jobs = payload;
    },
  },
  actions: {
    // eslint-disable-next-line consistent-return
    async getJobs({ commit }) {
      try {
        const response = await fetch('./server.json');

        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!data) {
          return [];
        }

        commit('setJobs', data?.jobs);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
