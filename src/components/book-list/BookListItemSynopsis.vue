<template>
  <div class="synopsis" data-cy="book-synopsis">
    <p>
      <text-highlight :queries="searchText">
        {{ getTruncatedSynopsis }}
      </text-highlight>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { get } from "lodash";

@Component
export default class BookListItemSynopsis extends Vue {
  @Prop({ type: String, required: true })
  bookSynopsis!: string;

  @Prop({ type: String, required: false })
  searchText!: string;

  get getTruncatedSynopsis() {
    return (this.bookSynopsis || "").substring(0, 200) + "...";
  }
}
</script>

<style lang="scss" scoped>
.synopsis {
  margin: 2em auto;
}
</style>
