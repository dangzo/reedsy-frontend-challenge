<template>
  <div class="pagination">
    <span
      v-for="(page, index) in getTotalPages"
      :class="{ active: pagination.activePageIndex === index }"
      :key="`page-link-${index}`"
    >
      <a href="#" @click.prevent="doSetPagination(index + 1)">
        {{ index + 1 }}
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";

// Data models
import { Pagination, EmptyPagination } from "@/models/Pagination";

const paginationVuexModule = namespace("pagination");

@Component
export default class BookListPagination extends Vue {
  @Prop({ type: Number, required: true })
  itemsLength!: number;

  @Prop({ type: Number, required: false, default: 4 })
  itemsPerPage!: number;

  // Vuex state
  @paginationVuexModule.State
  pagination!: Pagination;

  // Vuex mutations
  @paginationVuexModule.Mutation
  setPagination!: (newPagination: Pagination) => void;

  get getTotalPages() {
    if (this.itemsLength) {
      return (
        Math.floor(this.itemsLength / this.itemsPerPage) +
        (this.itemsLength % this.itemsPerPage ? 1 : 0)
      );
    }
    return 0;
  }

  doSetPagination(pageNumber: number) {
    const minIndex = this.itemsPerPage * (pageNumber - 1);
    const maxIndex = minIndex + this.itemsPerPage;

    this.setPagination({
      minIndex,
      maxIndex,
      activePageIndex: pageNumber - 1
    });
  }

  created() {
    // Set it to default values only the first time
    if (this.pagination === EmptyPagination) {
      this.setPagination({
        minIndex: 0,
        maxIndex: this.itemsPerPage,
        activePageIndex: 0
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  text-align: center;
  margin: 25px auto;

  span {
    display: inline-block;
    margin: auto 10px;
    width: 20px;
    height: 20px;
    padding: 10px;

    a {
      color: $text-color-h2;
      text-decoration: underline;
      -webkit-transition: color linear 0.1s;
      transition: color linear 0.1s;

      &:hover {
        color: adjust-color($background-color-upvote, $red: 15, $green: 15);
        text-decoration: none;
      }
    }

    &.active {
      font-weight: 900;
      width: 10px;
      background-color: darken($background-color-active, 30%);

      a {
        color: $text-color-tertiary;
        cursor: default;
        text-decoration: none;
      }
    }
  }
}
</style>
