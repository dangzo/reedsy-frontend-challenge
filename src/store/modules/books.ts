import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { Book, EmptyBook } from "@/models/Book";
import { get } from "lodash";
import axios from "axios";

@Module({ namespaced: true })
export default class BooksModelStore extends VuexModule {
  books: Book[] = [];

  selectedBook: Book = EmptyBook;

  @Mutation
  setBooks(newBooks: Book[]): void {
    this.books = newBooks;
  }

  @Mutation
  setSelectedBook(newBook: Book): void {
    this.selectedBook = newBook;
  }

  @Mutation
  setSelectedBookByIndex(bookIndex: number): void {
    if (bookIndex < this.books.length) {
      this.selectedBook = this.books[bookIndex];
    } else {
      this.selectedBook = this.books[0];
    }
  }

  @Action
  async retrieveBookBySlug(bookSlug: string): Promise<void> {
    try {
      // See the effects of a slower connection
      await new Promise(r => setTimeout(r, 1500));
      const response = await axios({
        method: "get",
        url: `http://0.0.0.0:3000/books/${bookSlug}`
      });

      const book = get(response, "data", EmptyBook);
      this.context.commit("setSelectedBook", book);
    } catch (error) {
      console.log("retrieveBookBySlug():", error);
    }
  }

  @Action
  async retrieveBooks(): Promise<void> {
    try {
      // See the effects of a slower connection
      await new Promise(r => setTimeout(r, 1500));
      const response = await axios({
        method: "get",
        url: `http://0.0.0.0:3000/books`
      });

      const books = get(response, "data.books", []);
      this.context.commit("setBooks", books);
    } catch (error) {
      console.log("retrieveBooks():", error);
    }
  }
}
