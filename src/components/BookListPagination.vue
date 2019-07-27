<template>
  <div class="pagination">
    <span v-for="(page, index) in getTotalPages" :key="`page-link-${index}`">
      <a href="#" @click.prevent>{{ index + 1 }}</a>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BookListPagination extends Vue {
  @Prop({ type: Number, required: true })
  itemsLength!: number;

  get getTotalPages() {
    if (this.itemsLength) {
      return this.itemsLength / 5 + (this.itemsLength % 5) ? 1 : 0;
    }
    return 0;
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  text-align: center;
}
</style>
