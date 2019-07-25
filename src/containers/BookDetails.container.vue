<template>
  <div>
    <BookDetails :book="selectedBook" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
// Additional components
import BookDetails from "@/components/BookDetails.vue";
// Data model
import { Book } from "@/models/Book";

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
}
</script>
