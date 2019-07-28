<template>
  <div class="synopsis" data-cy="book-synopsis">
    <h3>Synopsis</h3>
    <p>{{ bookSynopsis }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BookDetailsSynopsis extends Vue {
  @Prop({ type: String, required: true })
  bookSynopsis!: string;
}
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 900;
  font-size: 22px;
  line-height: 1em;
  margin: 1em auto;
}
</style>
