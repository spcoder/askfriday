<template>
  <div class="root">
    <SearchForm :small="!!response" v-model="text" @search="search" v-if="showSearchForm"/>
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
    showSearchForm: false,
    showProgress: false,
    showResponse: false,
    response: undefined,
    error: undefined
  }),
  created() {
    const { q } = this.$route.query;
    if (q) {
      this.text = decodeURIComponent('' + q);
      this.search();
    }
    if (!this.text) {
      this.showSearchForm = true;
    }
  },
  methods: {
    replaceURL() {
      if (this.$route.query.q !== this.text) {
        this.$router.replace({ path: '/', query: { q: this.text } });
      }
    },
    async search() {
      try {
        this.showResponse = false;
        if (this.showSearchForm) {
          this.showProgress = true;
        }
        this.response = await search(this.text);
        if ('redirect' in this.response) {
          window.location.href = this.response.redirect;
        } else {
          this.showSearchForm = true;
          this.showResponse = true;
          this.replaceURL();
        }
      } catch (err) {
        console.error(err);
        this.response = { markdown: '' + err };
        this.showSearchForm = true;
        this.showResponse = true;
        this.replaceURL();
      } finally {
        this.showProgress = false;
      }
    }
  }
};
</script>
