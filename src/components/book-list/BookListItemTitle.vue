<template>
  <h2>
    <!-- prettier-ignore -->
    <a href="#" @click.prevent="doEmitItemSelect">
      {{ getBookPrintableIndex }}.&nbsp;
      <text-highlight :queries="searchText">
        {{ bookTitle }}
      </text-highlight>
    </a>
    <span class="rating">({{ bookRating }}/10)</span>
  </h2>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BookListItem extends Vue {
  @Prop({ type: String, required: true, default: "" })
  bookTitle!: string;

  @Prop({ type: String, required: true, default: "" })
  bookRating!: string;

  @Prop({ type: String, required: true, default: "" })
  bookIndex!: string;

  @Prop({ type: String, required: true, default: "" })
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
