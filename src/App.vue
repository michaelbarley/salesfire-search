<template>
  <div class="app">
    <SearchBar :value="searchQuery" @update:value="updateSearchQuery" />
    <div class="app__content">
      <div v-if="!isLoading">
        <ResultsSet />
      </div>
      <div v-else>Loading results...</div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import SearchBar from "./components/SearchBar.vue";
import ResultsSet from "./components/ResultsSet.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    ResultsSet,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapGetters(["getProducts", "isLoading"]),
  },
  watch: {
    searchQuery(value) {
      this.setSearchQuery(value);
      this.search();
    },
  },
  methods: {
    ...mapMutations(["setSearchQuery"]),
    ...mapActions(["search"]),
    updateSearchQuery(value) {
      this.searchQuery = value;
    },
  },
};
</script>


<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
}

.app__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  padding-top: 20px;
}
</style>
