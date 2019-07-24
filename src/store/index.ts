import Vue from "vue";
import Vuex from "vuex";
// modules
import books from "./modules/books";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    books
  },
  state: {},
  strict: process.env.NODE_ENV !== "production"
});
