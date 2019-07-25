<template>
  <div id="main">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
@import "@/styles/variables.scss";

html,
body {
  height: 100%;
  margin: 0;
}

#main {
  background-color: $background-color-secondary;
  box-shadow: 0px 0px 12px #c4c3be;
  font-family: Arial, sans-serif;
  height: 100%;
  margin: auto;
  max-width: $main-container-width;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .container {
    padding: 30px;
    height: 100%;
  }

  .row {
    margin-left: -30px;
    margin-right: -30px;
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
