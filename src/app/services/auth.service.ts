import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {ApiService} from './api.service';
import {API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER} from '../utils/api.utils';
import {TokenObject} from '../models/token-object.model';
import {IdObject} from '../models/id-object.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public cachedIsLoggedIn?: boolean;
    public cachedUserId: number | null = null;

    public constructor(private apiService: ApiService) {
        this.isLoggedIn().then();
    }

    public async register(user: Partial<User>): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>(API_USER_REGISTER, user);

        if (response !== null) {
            localStorage.setItem('token', response.token);
            this.saveCache(!!response, response!.id);
        }

        return !!response;
    }

    public async login(user: Partial<User>): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>(API_USER_LOGIN, user);

        if (response !== null) {
            localStorage.setItem('token', response.token);
            this.saveCache(!!response, response!.id);
        }

        return !!response;
    }

    public logout(): void {
        localStorage.removeItem('token');
        this.saveCache();
    }

    public async isLoggedIn(): Promise<boolean> {
        if (!!this.cachedUserId) {
            return this.cachedIsLoggedIn!;
        }
        const response = await this.apiService.post<IdObject>(
            API_USER_AUTH,
            {token: localStorage.getItem('token')},
            false
        );

        if (!response) return false;

        this.saveCache(!!response, response.id);

        return true;
    }

    private saveCache(isLoggedIn: boolean = false, userId: number | null = null): void {
        this.cachedIsLoggedIn = isLoggedIn;
        this.cachedUserId = userId;
    }
}
