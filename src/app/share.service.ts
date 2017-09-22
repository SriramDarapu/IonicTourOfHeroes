import { Hero } from "./hero";

export class SharedService {
    id: number;
    name: string;

    constructor(){
        this.id = null;
        this.name = "";
    }

    setDetails(hero: Hero) {
        this.id = hero.id;
        this.name = hero.name;
    }

    getDetails() {
        return {id: this.id, name: this.name};
    }
}