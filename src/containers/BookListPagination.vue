<template>
  <div class="pagination">
    <!-- prev link -->
    <PaginationPrevLink
      :active-page-index="pagination.activePageIndex"
      @click="doSetPagination"
    />
    <!-- all page links -->
    <span
      v-for="(page, index) in getTotalPages"
      :class="{ active: pagination.activePageIndex === index }"
      :key="`page-link-${index}`"
    >
      <a href="#" @click.prevent="doSetPagination(index + 1)">
        {{ index + 1 }}
      </a>
    </span>
    <!-- next link -->
    <PaginationNextLink
      :active-page-index="pagination.activePageIndex"
      :total-pages="getTotalPages"
      @click="doSetPagination"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";

// Components
import PaginationPrevLink from "@/components/pagination/PaginationPrevLink.vue";
import PaginationNextLink from "@/components/pagination/PaginationNextLink.vue";

// Data models
import { Pagination, EmptyPagination } from "@/models/Pagination";

const paginationVuexModule = namespace("pagination");

@Component({
  components: {
    PaginationPrevLink,
    PaginationNextLink
  }
})
export default class BookListPagination extends Vue {
  @Prop({ type: Number, required: true })
  itemsLength!: number;

  @Prop({ type: Number, required: false, default: 4 })
  itemsPerPage!: number;

  @Prop({ type: String, required: false, default: "" })
  searchText!: string;

  // Vuex state
  @paginationVuexModule.State
  pagination!: Pagination;

  // Vuex mutations
  @paginationVuexModule.Mutation
  setPagination!: (newPagination: Pagination) => void;

  // Vuex actions
  @paginationVuexModule.Action
  doUpdatePagination!: (payload: {
    currentTotalItems: number;
    itemsPerPage: number;
  }) => Promise<void>;

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

  @Watch("searchText")
  updatePaginationWhenTextChanges() {
    // Reset pagination to index 0 if we are applying a search filter
    // and current filtered elements length is < total elements that
    // should be displaying in current active page
    // (hope this makes sense).
    // In short, this allows us to avoid having a "No elements found"
    // when the search filter still returns some elements.
    if (this.searchText.length) {
      this.doUpdatePagination({
        currentTotalItems: this.itemsLength,
        itemsPerPage: this.itemsPerPage
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.pagination {
  text-align: center;
  margin: 25px auto;

  span {
    display: inline-block;
    margin: auto 10px;
    width: 20px;
    height: 20px;
    padding: 10px;

    &.next,
    &.prev {
      width: auto;

      a {
        text-decoration: none;

        &.disabled {
          cursor: default;
          color: #cc9;
        }
      }
    }

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
