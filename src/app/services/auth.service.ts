import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {ApiService} from './api.service';
import {API_USER_LOGIN, API_USER_REGISTER} from '../utils/api.utils';
import {TokenObject} from '../models/token-object.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private apiService: ApiService) {}

    public async signup(user: Partial<User>): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>(API_USER_REGISTER, user, 201);

        if (response != null) {
            localStorage.setItem('token', response.token);
        }

        return !!response;
    }

    public async login(user: Partial<User>): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>(API_USER_LOGIN, {
            ...user,
            token: localStorage.getItem('token'),
        });

        if (response != null) {
            localStorage.setItem('token', response.token);
        }

        return !!response;
    }

    public logout(): void {
        localStorage.removeItem('token');
    }
}
