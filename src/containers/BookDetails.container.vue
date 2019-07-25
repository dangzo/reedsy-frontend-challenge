<template>
  <div class="container">
    <BookDetails v-if="!isBookEmpty()" :book="selectedBook" />
    <div v-else>Loading data...</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { get } from "lodash";
// Additional components
import BookDetails from "@/components/BookDetails.vue";
// Data model
import { Book, EmptyBook } from "@/models/Book";

const booksVuexModule = namespace("books");

@Component({
  components: {
    BookDetails
  }
})
export default class BookList extends Vue {
  // Vuex state
  @booksVuexModule.State
  selectedBook!: Book;

  // Vuex Actions
  @booksVuexModule.Action
  retrieveBookBySlug!: (bookSlug: string) => void;

  // Local state
  loadingData: boolean = false;

  // Retrieve book from API if book is not set
  // (this may happen on situations like page refresh)
  async doRetrieveBook(slug: string) {
    this.loadingData = true;
    await this.retrieveBookBySlug(slug);
    this.loadingData = false;
  }

  isBookEmpty() {
    return this.selectedBook === EmptyBook;
  }

  created() {
    if (this.selectedBook === EmptyBook) {
      const slug = get(this.$router, "history.current.params.bookSlug", null);
      this.doRetrieveBook(slug);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.container {
  background-color: $background-color-secondary;
  min-height: 400px;
}
</style>
