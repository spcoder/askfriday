<template>
  <div class="root" :class="{ small }">
    <div class="search-form" :class="{ small }">
      <h1>AskFriday</h1>
      <form @submit.prevent="search">
        <label>
          <a href="/">AskFriday</a>
          <input :value="value" @input="$emit('input', $event.target.value)" type="text" name="q" placeholder="Search..." autofocus/>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    value: String,
    small: Boolean
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
.root.small {
  text-align: left;
  padding: 1.5rem 1rem;
}

.root > .search-form {
  margin: 20vh auto;
  max-width: 600px;
}

.root.small > .search-form {
  margin: 0;
}

.root > .search-form > h1 {
  font-size: 300%;
  margin: 2rem;
  letter-spacing: -0.02em;
}

.root.small > .search-form > h1 {
  display: none;
}

.root > .search-form > form > label > a {
  display: none;
}

.root.small > .search-form > form > label > a {
  display: block;
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0;
  padding: 0;
}

.root.small > .search-form > form > label {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  align-items: center;
}

.root > .search-form > form > label > input {
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.2rem;
}

.root.small > .search-form > form > label > input {
  padding: 0.5rem 1rem;
}
</style>
