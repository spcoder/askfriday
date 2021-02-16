<template>
  <div class="response-display">
    <Markdown :html="html" v-if="isMarkdown"/>
  </div>
</template>

<script>
import marked from 'marked';
import Markdown from '@/components/Markdown';

export default {
  name: 'ResponseDisplay',
  components: { Markdown },
  props: {
    searchResponse: Object
  },
  computed: {
    isMarkdown() {
      return ('markdown' in this.searchResponse);
    },
    html() {
      if (this.isMarkdown) {
        const { markdown } = this.searchResponse;
        return marked(markdown.trim(), { gfm: true, breaks: true, smartLists: true, smartypants: true });
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
.response-display {
  text-align: left;
  margin: 1rem 2rem 4rem 2rem;
  width: 70ch;
}
</style>

<style>
.response-display h2 {
  margin-top: 6rem;
}

.response-display h2:first-of-type {
  margin-top: 0;
}
</style>
