import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Pagination, EmptyPagination } from "@/models/Pagination";

@Module({ namespaced: true })
export default class PaginationModelStore extends VuexModule {
  pagination: Pagination = EmptyPagination;

  @Mutation
  setPagination(newPagination: Pagination): void {
    this.pagination = newPagination;
  }
}
