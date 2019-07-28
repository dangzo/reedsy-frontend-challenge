<template>
  <div class="search-box-container" data-cy="search-box">
    <input
      v-model="inputValue"
      type="text"
      placeholder="Type to search"
      @input="doEmitInputChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchBox extends Vue {
  inputValue: string = "";

  doEmitInputChange() {
    this.$emit("input", this.inputValue.trim());
  }
}
</script>

<style lang="scss" scoped>
input {
  width: 300px;
  padding: 0.5em 1em;
  font-size: 15px;

  @media (max-width: 550px) {
    display: block;
    width: 100%;
  }
}
.search-box-container {
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  justify-content: flex-end;
}
</style>
