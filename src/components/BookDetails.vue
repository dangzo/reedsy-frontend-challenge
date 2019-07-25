<template>
  <div>
    {{ book.title }}
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
