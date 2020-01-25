export class User {
    name: string;
    coins: number;
    // moves: [];

    constructor(username:string){
        this.name = username;
        this.coins = 1000;
    }
}