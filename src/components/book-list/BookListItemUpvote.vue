<template>
  <div class="upvote" data-cy="book-upvoted-button">
    <a href="#" :class="{ upvoted: bookUpvoted }" @click.prevent>
      {{ getUpvotedText }}
    </a>
    <span data-cy="book-upvoted-text">Upvoted {{ bookUpvotes }} times</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BookListItemUpvote extends Vue {
  @Prop({ type: Boolean, required: true })
  bookUpvoted!: boolean;

  @Prop({ type: Number, required: true })
  bookUpvotes!: number;

  get getUpvotedText() {
    return this.bookUpvoted ? "Upvoted" : "Upvote";
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

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

      &:hover {
        cursor: default;
      }
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
