export interface Pagination {
  minIndex: number | undefined;
  maxIndex: number | undefined;
  activePageIndex: number | undefined;
}

export const EmptyPagination: Pagination = {
  minIndex: 0,
  maxIndex: 0,
  activePageIndex: 0
};
