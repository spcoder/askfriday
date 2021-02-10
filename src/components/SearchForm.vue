<template>
  <div class="search-form">
    <h1>AskFriday</h1>
    <form @submit.prevent="search">
      <label>
        <input :value="value" @input="$emit('input', $event.target.value)" type="text" name="q" placeholder="Search..." autofocus/>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    value: String,
  },
  methods: {
    search() {
      const { text } = this;
      this.$emit('search', { text });
    }
  }
};
</script>

<style scoped>
.search-form {
  margin: 20vh auto;
  max-width: 600px;
}

h1 {
  font-size: 300%;
  margin: 2rem;
  letter-spacing: -0.02em;
}

input {
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
}
</style>
