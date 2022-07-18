import {Game} from './game';

export class User {
    constructor(public username: string, public password: string) {}
    public purchasedGames: Array<Game> = [];
    public watchlist: Array<Game> = [];
}
