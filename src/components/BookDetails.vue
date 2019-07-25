<template>
  <div class="book-container">
    <!-- Title -->
    <h1>{{ book.title }}</h1>

    <!-- Author -->
    <div class="author">{{ book.author }}</div>

    <!-- Upvote -->
    <div class="upvote">
      <span>Upvoted {{ book.upvotes }} times</span>
      <a href="#" :class="{ upvoted: book.upvoted }" @click.prevent>
        {{ getUpvotedText }}
      </a>
    </div>

    <!-- Cover image (float to title's right) -->
    <img
      :src="book.cover"
      :alt="`${book.title}, ${book.author}`"
      :title="`${book.title}, ${book.author}`"
    />

    <!-- Synopsis -->
    <div class="synopsis">
      <h3>Synopsis</h3>
      <p>{{ book.synopsis }}</p>
    </div>

    <!-- Rating -->
    <div class="rating">Rating {{ book.rating }}/10</div>
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

  get getUpvotedText() {
    return this.book.upvoted ? "Upvoted" : "Upvote";
  }
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

  h3 {
    font-weight: 900;
    font-size: 22px;
    line-height: 1em;
    margin: 1em auto;
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

  .upvote {
    margin: 2em auto;
    position: absolute;
    top: 0;
    right: 0;

    a {
      background-color: $background-color-upvote;
      border-radius: 8px;
      padding: 8px 12px;
      color: #ffffff;
      text-decoration: none;
      -webkit-transition: background-color linear 0.1s;
      transition: background-color linear 0.1s;

      &.upvoted {
        background-color: transparent;
        border: 2px solid $background-color-upvote;
        color: $text-color-upvote;
        font-weight: 900;
      }

      &.upvoted:hover {
        cursor: default;
      }

      &:not(.upvoted):hover {
        background-color: adjust-color(
          $background-color-upvote,
          $red: 25,
          $green: 25
        );
      }
    }

    span {
      margin-right: 20px;
    }

    @media (max-width: 675px) {
      width: 100%;
      text-align: center;
      margin: 2em auto;
      position: relative;

      a,
      span {
        display: block;
      }

      span {
        margin: 0 0 1em 0;
      }
    }
  }

  .rating {
    font-weight: 900;
    margin-top: 2em;
  }
}
</style>
