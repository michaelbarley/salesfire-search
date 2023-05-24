const initialState = () => ({
    searchQuery: '',
  });
  
  export default {
    state: initialState(),
    mutations: {
      setSearchQuery(state, query) {
        state.searchQuery = query;
      },
      resetState(state) {
        Object.assign(state, initialState());
      },
    },
    actions: {
      setSearchQuery({ commit }, query) {
        commit('setSearchQuery', encodeURIComponent(query));
      },
    },
    getters: {
      getSearchQuery(state) {
        return state.searchQuery;
      },
    },
  };
  