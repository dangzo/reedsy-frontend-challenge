<template>
  <div class="container">
    <h1>Top books of all time</h1>
    <BookList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookList from "@/containers/BookList.container.vue";

@Component({
  components: {
    BookList
  }
})
export default class Books extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

h1 {
  color: $text-color-h1;
  text-align: center;
  font-weight: 900;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    line-height: 1em;
    font-size: 30px;
  }
}
.container {
  background-color: $background-color-primary;
}
</style>
