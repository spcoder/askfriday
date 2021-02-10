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
  --color-text: #1b1b1b;
  --color-gray-light: #eee;
  --color-primary: #FF385C;
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
}

#app {
  text-align: center;
  color: var(--color-text);
  line-height: 1.2;
}

h1 {
  color: var(--color-primary);
  font-size: 3rem;
  font-weight: 900;
}

h2 {
  font-size: 2.3rem;
}

h1, h2 {
  letter-spacing: -0.02em;
  margin: 2rem auto 1rem auto;
}

h1 > a, h2 > a, h3 > a, h4 > a {
  color: var(--color-text);
  text-decoration: none;
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

