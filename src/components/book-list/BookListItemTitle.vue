<template>
  <h2 data-cy="book-title">
    <!-- prettier-ignore -->
    <a href="#" @click.prevent="doEmitItemSelect">
      {{ getBookPrintableIndex }}.&nbsp;
      <text-highlight :queries="searchText">
        {{ bookTitle }}
      </text-highlight>
    </a>
    <span class="rating" data-cy="book-rating">({{ bookRating }}/10)</span>
  </h2>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BookListItemTitle extends Vue {
  @Prop({ type: String, required: true })
  bookTitle!: string;

  @Prop({ type: String, required: true })
  bookRating!: string;

  @Prop({ type: Number, required: true })
  bookIndex!: number;

  @Prop({ type: String, required: true })
  searchText!: string;

  get getBookPrintableIndex() {
    return this.bookIndex + 1;
  }

  doEmitItemSelect() {
    this.$emit("select");
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: $text-color-h2;

  a {
    color: $text-color-h2;
    text-decoration: none;
    -webkit-transition: color linear 0.1s;
    transition: color linear 0.1s;

    &:hover {
      color: adjust-color($background-color-upvote, $red: 15, $green: 15);
    }
  }

  .rating {
    color: $text-color-primary;
    font-weight: 300;
    font-size: 18px;
    margin-left: 10px;
    position: relative;
    top: -2px;
  }

  @media (max-width: 550px) {
    line-height: 1em;
  }
}
</style>
