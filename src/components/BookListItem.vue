<template>
  <div
    class="row book-list-item"
    data-cy="book-list-item"
    :class="{ odd: this.index % 2 === 0 }"
  >
    <div class="container">
      <!-- Cover image (float to right) -->
      <img
        data-cy="book-cover"
        :src="book.cover"
        :alt="`${book.title}, ${book.author}`"
        :title="`${book.title}, ${book.author}`"
        @click="doEmitItemSelect"
      />

      <!-- Title and rating -->
      <BookListItemTitle
        :book-title="book.title"
        :book-rating="book.rating"
        :book-index="index"
        :search-text="searchText"
        @select="doEmitItemSelect"
      />

      <!-- Author -->
      <div class="author" data-cy="book-author">{{ book.author }}</div>

      <!-- Synopsis -->
      <BookListItemSynopsis
        :book-synopsis="book.synopsis"
        :search-text="searchText"
      />

      <!-- Upvote -->
      <BookListItemUpvote
        :book-upvoted="book.upvoted"
        :book-upvotes="book.upvotes"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { get } from "lodash";
// Other components
import BookListItemTitle from "./book-list/BookListItemTitle.vue";
import BookListItemSynopsis from "./book-list/BookListItemSynopsis.vue";
import BookListItemUpvote from "./book-list/BookListItemUpvote.vue";
// Data model
import { Book } from "@/models/Book";

@Component({
  components: {
    BookListItemTitle,
    BookListItemSynopsis,
    BookListItemUpvote
  }
})
export default class BookListItem extends Vue {
  @Prop({ type: Object, required: true })
  book!: Book;

  @Prop({ type: Number, required: true })
  index!: number;

  @Prop({ type: String, required: false, default: "" })
  searchText!: string;

  get getUpvotedText() {
    return this.book.upvoted ? "Upvoted" : "Upvote";
  }

  doEmitItemSelect() {
    this.$emit("select", this.index);
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.container {
  height: auto;
}

img {
  cursor: pointer;
  float: right;
  margin-left: 25px;
  width: 150px;

  @media (max-width: 550px) {
    display: block;
    float: none;
    margin: auto auto 25px auto;
  }
}

.author {
  color: lighten($text-color-primary, 20%);
  font-size: $text-font-size + 1;
  margin: 0.5em auto;
  font-style: italic;

  @media (max-width: 550px) {
    margin: 1em 0 0 0;
  }
}

.book-list-item.odd {
  background-color: $background-color-secondary;
}
</style>
