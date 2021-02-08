import { makeAutoObservable } from "mobx";

class State {
    state: string = "Popular";

    constructor() {
        makeAutoObservable(this);
    }

    categoryToPopular() {
        this.state = "Popular";
    }
    categoryToFavorite() {
        this.state = "Favorite";
    }
    categoryToNew() {
        this.state = "New";
    }
}

export const CategoryState = new State();
