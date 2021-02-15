<template>
  <div class="root">
    <SearchForm :small="response" :search="search" v-model="text" @search="search"/>
    <ProgressIndeterminate v-if="showProgress"/>
    <ResponseDisplay :search-text="text" :search-response="response" v-if="showResponse"/>
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
      try {
        this.searching = true;
        this.response = await search(this.text);
        if (replaceRoute) {
          return this.$router.replace({ path: '/', query: { q: encodeURIComponent(this.text) } });
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.searching = false;
      }
    }
  }
};
</script>
