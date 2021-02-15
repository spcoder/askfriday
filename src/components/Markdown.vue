<template>
  <div class="markdown" v-html="html"></div>
</template>

<script>
export default {
  name: 'Markdown',
  props: {
    html: String
  }
};
</script>
