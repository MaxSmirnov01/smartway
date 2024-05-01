// any я стараюсь нигде не использовать, но здесь по-другому думаю никак
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Item = Record<string | symbol, any>;

type Repositories = {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
};

export interface Storage {
  repositories: Repositories | null;
  favoriteRepositories: Item[];
  state: string;
  error: string;
  fetchRepositories: (value: string) => Promise<void>;
  addFavoriteRepo: (item: Item) => void;
}
