<template>
  <div class="row book-list-item" :class="{ odd: this.index % 2 === 0 }">
    <div class="container">
      <!-- Cover image (float to right) -->
      <img
        :src="book.cover"
        :alt="`${book.title}, ${book.author}`"
        :title="`${book.title}, ${book.author}`"
        @click="emitItemSelect"
      />

      <!-- Title and rating -->
      <h2 @click.prevent="emitItemSelect">
        <a href="#" @click.prevent>{{ getBookPrintableIndex }}. {{ book.title }}</a>
        <span>({{ book.rating }}/10)</span>
      </h2>

      <!-- Author -->
      <div class="author">{{ book.author }}</div>
      
      <!-- Synopsis -->
      <div class="synopsis">
        <p>{{ getTruncatedSynopsis }}</p>
      </div>
      
      <!-- Upvote -->
      <div class="upvote">
        <a href="#" :class="{ upvoted: book.upvoted }">
          {{ getUpvotedText }}
        </a>
        <span>Upvoted {{ book.upvotes }} times</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { get } from "lodash";
// Data model
import { Book, EmptyBook } from "@/models/Book";

@Component({
  components: {
    BookListItem
  }
})
export default class BookListItem extends Vue {
  @Prop({ type: Object, required: true, default: EmptyBook })
  book!: Book;

  @Prop({ type: Number, required: true })
  index!: number;

  get getTruncatedSynopsis() {
    const synopsis = get(this.book, "synopsis", "");
    return synopsis.substring(0, 200) + "...";
  }

  get getUpvotedText() {
    return this.book.upvoted ? "Upvoted" : "Upvote";
  }

  get getBookPrintableIndex() {
    return this.index + 1;
  }

  emitItemSelect() {
    this.$emit("select", this.index);
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

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

  span {
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
  margin: 1em auto;
  font-style: italic;

  @media (max-width: 550px) {
    margin: 1em 0 0 0;
  }
}

.book-list-item.odd {
  background-color: $background-color-secondary;
}

.synopsis {
  margin: 2em auto;
}

.upvote {
  margin: 1em auto;
  display: inline-block;

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
    margin-left: 20px;
  }

  @media (max-width: 550px) {
    width: 100%;
    text-align: center;
    margin: 0;

    a,
    span {
      display: block;
    }

    span {
      margin: 1em 0 0 0;
    }
  }
}
</style>
