<template>
  <div class="container">
    <h1>Top books of all time</h1>
    <div v-if="loadingData">Loading data...</div>
    <div v-else>
      <div v-if="books.length">
        <BookListItem
          v-for="(book, index) in books"
          :book="book"
          :index="index"
          :key="`book-item-${index}`"
          @select="doSelectBook"
        />
      </div>
      <div v-else>No data found.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
// Additional components
import BookListItem from "@/components/BookListItem.vue";
// Data model
import { Book } from "@/models/Book";

const booksVuexModule = namespace("books");

@Component({
  components: {
    BookListItem
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

h1 {
  color: $text-color-h1;
  text-align: center;
  font-weight: 900;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    line-height: 1em;
    font-size: 30px;
  }
}

.container {
  background-color: $background-color-primary;
  height: 100%;
}
</style>

