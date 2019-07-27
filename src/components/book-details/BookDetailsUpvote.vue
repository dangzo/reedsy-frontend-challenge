<template>
  <div class="upvote">
    <span>Upvoted {{ bookUpvotes }} times</span>
    <a href="#" :class="{ upvoted: bookUpvoted }" @click.prevent="doUpvote">
      {{ getUpvotedText }}
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BookDetailsUpvote extends Vue {
  @Prop({ type: Number, required: true })
  bookUpvotes!: number;

  @Prop({ type: Boolean, required: true })
  bookUpvoted!: boolean;

  get getUpvotedText() {
    return this.bookUpvoted ? "Upvoted" : "Upvote";
  }

  doUpvote() {
    // do nothing
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

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
</style>
