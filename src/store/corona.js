import axios from "axios";

const corona = {
  namespaced: true,
  state: {
    url: process.env.VUE_APP_CORONA_API,
    data_corona: []
  },
  getters: {
    data_corona: state => state.data_corona
  },
  mutations: {
    update(state, data) {
      state[data[0]] = data[1];
    }
  },
  actions: {
    get_data_all_corona({ state, commit }) {
      axios
        .get(`${state.url}/corona/all`)
        .then(response => {
          console.log(response);
          commit("update", ["data_corona", response.data]);
        })
        .then(error => {
          console.log(error);
        });
    }
  }
};

export default corona;
