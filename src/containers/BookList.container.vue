<template>
  <div class="container">
    <!-- search box -->
    <SearchBox @input="doChangeSearchText" />
    <!-- loader -->
    <div v-if="loadingData">Loading data...</div>
    <div v-else>
      <div v-if="getFilteredBooks.length">
        <!-- book list -->
        <BookListItem
          v-for="(book, index) in getFilteredBooks"
          :book="book"
          :index="index"
          :search-text="searchText"
          :key="`book-item-${index}`"
          @select="doSelectBook"
        />
      </div>
      <div v-else>No data found.</div>
    </div>
    <!-- pagination -->
    <BookListPagination :items-length="books.length" />
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

  doChangeSearchText(searchText: string) {
    this.searchText = searchText;
  }

  doSelectBook(bookIndex: number) {
    const selectedBook = this.books[bookIndex];
    this.setSelectedBookByIndex(bookIndex);
    this.$router.push(`/books/${selectedBook.slug}`);
  }

  async doRetrieveBooks() {
    // Get data from server only once
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
}
</style>
