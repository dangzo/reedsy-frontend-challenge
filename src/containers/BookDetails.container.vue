<template>
  <BookDetails :book="selectedBook" />
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

  created() {
    // Retrieve book from API if book is not set
    // (this may happen on situations like page refresh)
    if (this.selectedBook === EmptyBook) {
      const slug = get(this.$router, "history.current.params.bookSlug", null);
      console.log(this.$router, slug);
      // this.retrieveBookBySlug(bookSlug);
    }
  }
}
</script>
