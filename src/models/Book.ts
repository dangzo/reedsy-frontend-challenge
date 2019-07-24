export interface Book {
  author: string | undefined;
  cover: string | undefined;
  rating: string | undefined;
  slug: string | undefined;
  synopsis: string | undefined;
  title: string | undefined;
  upvoted: boolean | undefined;
  upvotes: number | undefined;
}

export const EmptyBook: Book = {
  author: undefined,
  cover: undefined,
  rating: undefined,
  slug: undefined,
  synopsis: undefined,
  title: undefined,
  upvoted: undefined,
  upvotes: undefined
};
