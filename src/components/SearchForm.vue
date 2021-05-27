<template>
  <div class="root" :class="{ small }">
    <div class="search-form" :class="{ small }">
      <img src="/ask_friday_icon_text.png" alt="AskFriday"/>
      <form @submit.prevent="search">
        <label>
          <a href="/">
            <img src="/ask_friday_logo.png" alt="AskFriday"/>
          </a>
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
.root {
  padding: 0 2rem;
}

.root.small {
  text-align: left;
  padding: 1.5rem 2rem;
}

.root > .search-form {
  margin: 20vh auto;
  max-width: 600px;
}

.root > .search-form > img {
  width: 153px;
  height: 130px;
  margin-bottom: 1rem;
}

.root.small > .search-form {
  margin: 0;
}

.root.small > .search-form > img {
  display: none;
}

.root > .search-form > form > label > a {
  display: none;
}

.root.small > .search-form > form > label > a {
  display: block;
  margin: 0;
  padding: 0;
}

.root.small > .search-form > form > label > a > img {
  width: 30px;
  height: 22px;
}

.root.small > .search-form > form > label {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  align-items: center;
}

.root > .search-form > form > label > input {
  border-radius: 0.5rem;
  border-width: 1px;
  padding: 1rem;
  font-size: 1.2rem;
}

.root.small > .search-form > form > label > input {
  padding: 0.5rem 1rem;
}
</style>
