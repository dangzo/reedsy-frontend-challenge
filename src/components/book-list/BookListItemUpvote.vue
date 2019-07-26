<template>
  <div class="upvote">
    <a href="#" :class="{ upvoted: bookUpvoted }">
      {{ getUpvotedText }}
    </a>
    <span>Upvoted {{ bookUpvotes }} times</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BookListItem extends Vue {
  @Prop({ type: Boolean, required: true, default: false })
  bookUpvoted!: boolean;

  @Prop({ type: Number, required: true, default: 0 })
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
