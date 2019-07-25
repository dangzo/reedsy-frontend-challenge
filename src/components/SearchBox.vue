<template>
  <div class="search-box-container">
    <input
      v-model="inputValue"
      type="text"
      placeholder="Type to search"
      @input="doEmitInputChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

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
}
.search-box-container {
  width: 100%;
  text-align: right;
  margin-bottom: 25px;
}
</style>
