import { makeAutoObservable, runInAction } from 'mobx';
import { Storage, Item } from '../types/types';

class Store implements Storage {
  repositories = null;
  favoriteRepositories: Item[] = [];
  state = '';
  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRepositories(value: string) {
    this.repositories = null;
    this.state = 'pending';
    this.error = '';

    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${value}`);
      const data = await response.json();

      runInAction(() => {
        if (response.status === 403) {
          this.state = 'error';
          this.error = data.message;
        } else {
          this.repositories = data;
          this.state = 'fulfilled';
        }
      });
    } catch (e) {
      runInAction(() => {
        this.state = 'error';
        this.error = e instanceof Error ? e.message : 'Unknown error';
      });
    }
  }

  addFavoriteRepo(item: Item) {
    if (!this.favoriteRepositories.some((el) => el.id === item.id)) {
      this.favoriteRepositories.push(item);
    }
  }
}

const store = new Store();

export default store;
