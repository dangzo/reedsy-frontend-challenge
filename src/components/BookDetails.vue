<template>
  <div>
    <h1>{{ book.title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
// Data model
import { Book, EmptyBook } from "@/models/Book";

@Component
export default class BookDetails extends Vue {
  @Prop({ type: Object, required: true, default: EmptyBook })
  book!: Book;
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

h1 {
  color: darken($text-color-active, 20%);

  @media (max-width: 550px) {
    line-height: 1em;
  }
}
</style>
