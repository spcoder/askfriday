<template>
  <div class="response-display">
    <div class="markdown" v-if="isMarkdown" v-html="markdown"></div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'ResponseDisplay',
  props: {
    searchResponse: Object
  },
  computed: {
    isMarkdown() {
      return ('markdown' in this.searchResponse);
    },
    markdown() {
      if (this.isMarkdown) {
        return marked(this.searchResponse.markdown.trim(), { gfm: true, breaks: true, smartLists: true, smartypants: true });
      }
      return undefined;
    },
  },
  created() {
    if ('redirect' in this.searchResponse) {
      const { redirect } = this.searchResponse;
      window.location.href = redirect;
    }
  }
};
</script>

<style>
img {
  width: 100%;
}
</style>

<style scoped>
.response-display > .markdown {
  text-align: left;
  margin: 1rem auto 4rem auto;
  width: 70ch;
}
</style>
