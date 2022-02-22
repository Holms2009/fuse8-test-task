import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houses: []
  },
  mutations: {
    setHouses(state, payload) {
      console.log(payload);
      state.houses = payload;
    }
  },
  actions: {
    actionFetchHouses({ commit }) {
      return fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
        .then((res) => res.json())
        .then((data) => {
          commit('setHouses', data)
        })
        .catch((err) => {
          console.log(err.message);
        })
    }
  },
  getters: {
    getHouses({ houses }) {
      return houses;
    }
  }
})
