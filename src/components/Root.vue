<template>
  <div class="root">
    <SearchForm :search="search" v-model="text" v-if="showForm" @search="search"/>
    <ProgressIndeterminate v-if="showProgress"/>
    <ResponseDisplay :search-response="response" v-if="showResponse"/>
  </div>
</template>

<script>
import ResponseDisplay from './ResponseDisplay';
import SearchForm from './SearchForm';
import { search } from '@/services/api';
import ProgressIndeterminate from '@/components/ProgressIndeterminate';

export default {
  name: 'Root',
  components: { ProgressIndeterminate, SearchForm, ResponseDisplay },
  data: () => ({
    text: '',
    searching: false,
    response: undefined
  }),
  computed: {
    showForm() {
      return !this.searching && !this.response;
    },
    showResponse() {
      return !this.searching && this.response;
    },
    showProgress() {
      return this.searching;
    }
  },
  created() {
    const { q } = this.$route.query;
    if (q) {
      this.text = decodeURIComponent('' + q);
      this.search(false);
    }
  },
  methods: {
    async search(replaceRoute = true) {
      this.searching = true;
      this.response = await search(this.text);
      this.searching = false;
      if (replaceRoute) {
        return this.$router.replace({ path: '/', query: { q: encodeURIComponent(this.text) } });
      }
    }
  }
};
</script>
