export class User {
    public constructor(public username: string, public password: string) {}
    public purchasedGames: Array<number> = []; // Game ids
    public watchlist: Array<number> = []; // Game ids
    public cart: Array<number> = []; // Game ids
}
