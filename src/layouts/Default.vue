<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/book/123">Book info</router-link>
    </div>
    <div id="main">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
@import "@/styles/variables.scss";

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  text-align: center;
}
#main {
  background-color: $background-color-secondary;
  box-shadow: 0px 0px 12px #c4c3be;
  margin: auto;
  max-width: $main-container-width;

  .container {
    padding: 30px;
  }

  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
}
</style>
