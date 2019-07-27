import Vue from "vue";
import Vuex from "vuex";
// modules
import books from "./modules/books";
import pagination from "./modules/pagination";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    books,
    pagination
  },
  state: {},
  strict: process.env.NODE_ENV !== "production"
});
