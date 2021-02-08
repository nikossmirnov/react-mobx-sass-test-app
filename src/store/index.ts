import { makeAutoObservable } from "mobx";

class State {
    state: string = "Popular";

    constructor() {
        makeAutoObservable(this);
    }

    categoryToPopular() {
        this.state = "Popular";
        console.log(this.state);
    }
    categoryToFavorite() {
        this.state = "Favorite";
        console.log(this.state);
    }
    categoryToNew() {
        this.state = "New";
        console.log(this.state);
    }
}

export const CategoryState = new State();
