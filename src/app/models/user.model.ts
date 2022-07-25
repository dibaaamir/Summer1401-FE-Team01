export class User {
    public purchasedGames: Array<number> = [];
    public watchlist: Array<number> = [];
    public cart: Array<number> = [];
    public constructor(public username: string, public password: string) {}
}
