import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Pagination, EmptyPagination } from "@/models/Pagination";
import { get } from "lodash";

@Module({ namespaced: true })
export default class PaginationModelStore extends VuexModule {
  pagination: Pagination = EmptyPagination;

  @Mutation
  setPagination(newPagination: Pagination): void {
    this.pagination = newPagination;
  }

  // Reset pagination to index 0 if we are applying a search filter
  // and current filtered elements length is < total elements that
  // should be displaying in current active page
  // (hope this makes sense).
  // In short, this allows us to avoid having a "No elements found"
  // when the search filter still returns some elements.
  // prettier-ignore
  @Action
  async doUpdatePagination({
    currentTotalItems,
    itemsPerPage
  }: { currentTotalItems: number, itemsPerPage: number }): Promise<void> {
    const activePageIndex = get(this.pagination, "activePageIndex", 0);
    const totalItemsForActivePage = itemsPerPage * (activePageIndex + 1);

    if (currentTotalItems < totalItemsForActivePage) {
      this.context.commit("setPagination", {
        minIndex: 0,
        maxIndex: itemsPerPage,
        activePageIndex: 0
      });
    }
  }
}
