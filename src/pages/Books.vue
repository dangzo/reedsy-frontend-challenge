<template>
  <div class="container">
    <h1>Top books of all time</h1>
    <BookList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookList from "@/containers/BookList.vue";

@Component({
  components: {
    BookList
  }
})
export default class Books extends Vue {}
</script>

<style lang="scss">
h1 {
  color: $text-color-active;
  text-align: center;
  font-weight: 900;
}
.container {
  background-color: $background-color-primary;
}
</style>
