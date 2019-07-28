<template>
  <span class="next">
    <!-- prettier-ignore -->
    <a
      href="#"
      :class="{ disabled: isNextLinkDisabled() }"
      @click.prevent="doEmitClick"
    >
      next &rarr;
    </a>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PaginationNextLink extends Vue {
  @Prop({ type: Number, required: true })
  activePageIndex!: number;

  @Prop({ type: Number, required: true })
  totalPages!: number;

  // Returns true when current page index is total pages - 1
  isNextLinkDisabled() {
    return this.activePageIndex === this.totalPages - 1;
  }

  doEmitClick() {
    if (!this.isNextLinkDisabled()) 
      this.$emit("click", this.activePageIndex + 2);
  }
}
</script>

<style lang="scss" scoped>
.next {
  width: auto;

  a {
    text-decoration: none;
    color: $text-color-h2;
    -webkit-transition: color linear 0.1s;
    transition: color linear 0.1s;

    &:hover {
      color: adjust-color($background-color-upvote, $red: 15, $green: 15);
    }

    &.disabled {
      cursor: default;
      color: #cc9;
    }
  }
}
</style>
