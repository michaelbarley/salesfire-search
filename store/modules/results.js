const initialState = () => ({
    results: {
      products: [],
    },
    loading: false,
    error: null,
  });
  
  export default {
    state: initialState(),
    mutations: {
      setResults(state, results) {
        state.results = results;
      },
      setLoading(state, isLoading) {
        state.loading = isLoading;
      },
      setError(state, error) {
        state.error = error;
      },
      resetState(state) {
        Object.assign(state, initialState());
      },
    },
    actions: {
      async search({ commit, rootState }) {
        const query = rootState.search.searchQuery;
  
        if (!query) {
          commit('setResults', { products: [] });
          return;
        }
  
        commit('setLoading', true);
  
        try {
          const response = await fetch(
            `https://aix.salesfire.co.uk/api/searcha?client_id=3f32397c-21c6-47e5-9ebd-e9865ea03470&query=${encodeURIComponent(query)}&limit=10&page=1`
          );
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const results = await response.json();
          commit('setResults', results);
        } catch (error) {
          console.error('Fetch error:', error);
          commit('setResults', { products: [] });
          commit('setError', error.message || 'An error occurred');
        } finally {
          commit('setLoading', false);
        }
      },
    },
    getters: {
      getProducts(state) {
        return state.results.products;
      },
      isLoading(state) {
        return state.loading;
      },
      getError(state) {
        return state.error;
      },
    },
  };
  