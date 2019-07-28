<template>
  <span class="prev">
    <!-- prettier-ignore -->
    <a
      href="#"
      :class="{ disabled: disabled || isPrevLinkDisabled() }"
      @click.prevent="doEmitClick"
    >
      &larr; prev
    </a>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PaginationPrevLink extends Vue {
  @Prop({ type: Number, required: true })
  activePageIndex!: number;

  @Prop({ type: Boolean, required: false, default: false })
  disabled!: boolean;

  // Returns true when current page index is 0
  isPrevLinkDisabled() {
    return this.activePageIndex === 0;
  }

  doEmitClick() {
    if (!this.isPrevLinkDisabled()) {
      this.$emit("click", this.activePageIndex);
    }
  }
}
</script>

<style lang="scss" scoped>
.prev {
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
