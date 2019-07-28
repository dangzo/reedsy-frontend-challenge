<template>
  <div class="container">
    <!-- search box -->
    <SearchBox @input="doChangeSearchText" />
    <!-- loader -->
    <div v-if="loadingData" class="spinner" data-cy="spinner">
      <PulseLoader color="#a27934" size="18px" />
    </div>
    <div v-else>
      <div v-if="getBooks.length">
        <!-- book list -->
        <BookListItem
          v-for="(book, index) in getBooks"
          :book="book"
          :index="pagination.minIndex + index"
          :search-text="searchText"
          :key="`book-item-${pagination.minIndex + index}`"
          @select="doSelectBook"
        />
      </div>
      <div v-else class="not-found-text" data-cy="not-found-text">
        No data found.
      </div>
    </div>
    <!-- pagination -->
    <BookListPagination
      :disabled="getFilteredBooks.length < 1"
      :items-length="getFilteredBooks.length"
      :items-per-page="3"
      :search-text="searchText"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

// Additional components
import BookListItem from "@/components/BookListItem.vue";
import BookListPagination from "@/containers/BookListPagination.vue";
import SearchBox from "@/components/SearchBox.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

// Data models
import { Book } from "@/models/Book";
import { Pagination } from "@/models/Pagination";

const booksVuexModule = namespace("books");
const paginationVuexModule = namespace("pagination");

@Component({
  components: {
    BookListItem,
    BookListPagination,
    SearchBox,
    PulseLoader
  }
})
export default class BookListContainer extends Vue {
  // Vuex state
  @booksVuexModule.State
  books!: Book[];

  @paginationVuexModule.State
  pagination!: Pagination;

  // Vuex mutations
  @booksVuexModule.Mutation
  setSelectedBookByIndex!: (bookIndex: number) => void;

  // Vuex actions
  @booksVuexModule.Action
  retrieveBooks!: () => void;

  // Local state
  loadingData: boolean = false;

  searchText: string = "";

  // Filtered: meaning for search
  get getFilteredBooks() {
    return this.books.filter((book: Book) => {
      const bookTitle = book.title || "";
      const bookSynopsis = book.synopsis || "";
      return (
        bookTitle.toLowerCase().includes(this.searchText.toLowerCase()) ||
        bookSynopsis.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }

  get getBooks() {
    return this.doApplyPagination(this.getFilteredBooks);
  }

  doApplyPagination(books: Book[]) {
    return books.slice(this.pagination.minIndex, this.pagination.maxIndex);
  }

  doChangeSearchText(searchText: string) {
    this.searchText = searchText;
  }

  doSelectBook(bookIndex: number) {
    const selectedBook = this.books[bookIndex];
    this.setSelectedBookByIndex(bookIndex);
    this.$router.push(`/books/${selectedBook.slug}`);
  }

  async doRetrieveBooks() {
    // Get data from server only once, when books is not set
    if (this.books.length < 1) {
      this.loadingData = true;
      await this.retrieveBooks();
      this.loadingData = false;
    }
  }

  created() {
    this.doRetrieveBooks();
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.container {
  background-color: $background-color-primary;
  height: 100%;

  .spinner {
    display: flex;

    .v-spinner {
      display: block;
      margin: 50px auto;
    }
  }

  .not-found-text {
    text-align: center;
    margin: 80px auto;
  }
}
</style>
