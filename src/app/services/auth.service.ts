import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {ApiService} from './api.service';
import {API_USER_REGISTER} from '../utils/api.utils';
import {TokenObject} from '../models/token-object.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private apiService: ApiService) {}

    public async signup(user: User): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>(API_USER_REGISTER, user, 201);

        if (response != null) {
            localStorage.setItem('token', response.token);
        }

        return !!response;
    }
}
