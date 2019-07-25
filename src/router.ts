import Vue from "vue";
import Router from "vue-router";

import Books from "./pages/Books.vue";
import BookInfo from "./pages/BookInfo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "books",
      component: Books
    },
    {
      path: "/books/:bookSlug",
      name: "book",
      component: BookInfo
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
