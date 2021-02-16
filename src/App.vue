<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
:root {
  --color-text: #1A2238;
  --color-text-background: #F7F7F7;
  --color-gray-light: #f2f2f2;
  --color-gray-border: #e2e2e2;
  --color-link-text: #00458B;
  --color-heading-1: #00458B;
  --color-heading-2: #1A2238;
  --color-error-text: #770606;
}

html {
  font-size: 16px;
}

*, html {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  line-height: 1;
  background: var(--color-text-background);
  color: var(--color-text);
}

#app {
  text-align: center;
  line-height: 1.2;
}

a, a:visited, a:active, a:hover {
  color: var(--color-link-text);
  text-decoration: none;
}

h1 {
  color: var(--color-heading-1);
  font-size: 3rem;
  font-weight: 900;
}

h2, h2 > a {
  color: var(--color-heading-2);
  font-size: 2.3rem;
}

h1, h2 {
  letter-spacing: -0.02em;
  margin: 2rem auto 1rem auto;
}

h1 > a:hover, h2 > a:hover, h3 > a:hover, h4 > a:hover {
  filter: brightness(200%);
}

p {
  line-height: 1.5;
}

form {
  width: 100%;
}

label {
  width: 100%;
}

blockquote {
  background: #ededed;
  padding: 0.5rem 1rem;
  margin: 0;
  border-left: 0.5rem solid #cdcdcd;
}

input, textarea {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  border: 1px solid lightgray;
  width: 100%;
}

input:focus, textarea:focus {
  outline: none;
}
</style>

