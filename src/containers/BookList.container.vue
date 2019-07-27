<template>
  <div class="container">
    <!-- search box -->
    <SearchBox @input="doChangeSearchText" />
    <!-- loader -->
    <div v-if="loadingData">Loading data...</div>
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
      <div v-else>No data found.</div>
    </div>
    <!-- pagination -->
    <BookListPagination
      :items-length="books ? books.length : 0"
      :items-per-page="3"
      :active-page-index="pagination.activePageIndex"
      @set-pagination="doSetPagination"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

// Additional components
import BookListItem from "@/components/BookListItem.vue";
import BookListPagination from "@/components/BookListPagination.vue";
import SearchBox from "@/components/SearchBox.vue";

// Data model
import { Book } from "@/models/Book";

const booksVuexModule = namespace("books");

@Component({
  components: {
    BookListItem,
    BookListPagination,
    SearchBox
  }
})
export default class BookList extends Vue {
  // Vuex state
  @booksVuexModule.State
  books!: Book[];

  // Vuex mutations
  @booksVuexModule.Mutation
  setSelectedBookByIndex!: (bookIndex: number) => void;

  // Vuex actions
  @booksVuexModule.Action
  retrieveBooks!: () => void;

  // Local state
  loadingData: boolean = false;

  searchText: string = "";

  pagination: {
    minIndex: number;
    maxIndex: number;
    activePageIndex: number;
  } = { minIndex: 0, maxIndex: 3, activePageIndex: 0 };

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

  doSetPagination(payload: {
    minIndex: number;
    maxIndex: number;
    activePageIndex: number;
  }) {
    this.pagination = payload;
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
}
</style>
