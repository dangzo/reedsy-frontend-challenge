import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Book, EmptyBook } from "@/models/Book";

@Module({ namespaced: true })
export default class BooksModelStore extends VuexModule {
  books: Book[] = [];

  selectedBook: Book = EmptyBook;

  @Mutation
  setBooks(newBooks: Book[]): void {
    this.books = newBooks;
  }

  @Mutation
  setSelectedBookByIndex(bookIndex: number): void {
    if (bookIndex < this.books.length) {
      this.selectedBook = this.books[bookIndex];
    } else {
      this.selectedBook = this.books[0];
    }
  }
}
