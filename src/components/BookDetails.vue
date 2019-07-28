<template>
  <div class="book-container">
    <!-- Title -->
    <h1 data-cy="book-title">{{ book.title }}</h1>

    <!-- Author -->
    <div class="author" data-cy="book-author">{{ book.author }}</div>

    <!-- Upvote -->
    <BookDetailsUpvote
      :book-upvotes="book.upvotes"
      :book-upvoted="book.upvoted"
    />

    <!-- Cover image (float to title's right) -->
    <img
       data-cy="book-cover"
      :src="book.cover"
      :alt="`${book.title}, ${book.author}`"
      :title="`${book.title}, ${book.author}`"
    />

    <!-- Synopsis -->
    <BookDetailsSynopsis :book-synopsis="book.synopsis" />

    <!-- Rating -->
    <div class="rating" data-cy="book-rating">Rating {{ book.rating }}/10</div>

    <!-- Comments -->
    <BookDetailsComments />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
// Other components
import BookDetailsComments from "./book-details/BookDetailsComments.vue";
import BookDetailsSynopsis from "./book-details/BookDetailsSynopsis.vue";
import BookDetailsUpvote from "./book-details/BookDetailsUpvote.vue";
// Data model
import { Book } from "@/models/Book";

@Component({
  components: {
    BookDetailsComments,
    BookDetailsUpvote,
    BookDetailsSynopsis
  }
})
export default class BookDetails extends Vue {
  @Prop({ type: Object, required: true })
  book!: Book;
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.book-container {
  position: relative;
  margin: auto 30px;

  h1 {
    color: $text-color-h2;
    font-size: 32px;
    font-weight: 900;

    @media (max-width: 675px) {
      line-height: 1em;
      text-align: center;
    }
  }

  img {
    display: block;
    margin: 3em auto;
    max-width: 333px;
    width: 100%;

    @media (max-width: 750px) {
      margin: 1.5em auto;
    }
  }

  .author {
    color: lighten($text-color-primary, 20%);
    font-size: $text-font-size + 1;
    margin: 0;
    font-style: italic;

    @media (max-width: 675px) {
      margin: 1em 0 0 0;
      text-align: center;
    }
  }

  .rating {
    font-weight: 900;
    margin: 2em auto;
  }
}
</style>
