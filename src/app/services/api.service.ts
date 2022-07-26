import {Injectable} from '@angular/core';
import {GET_REQUEST_INIT, POST_REQUEST_INIT} from '../utils/api.utils';
import {SnackbarService} from './snackbar.service';
import {ApiError} from '../models/api-error.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor(private snackbarService: SnackbarService) {}

    public async post<T>(
        url: string,
        body: any = '',
        showSnackbar: boolean = true,
        init: Partial<RequestInit> = {}
    ): Promise<T | null> {
        const response = await fetch(url, {...POST_REQUEST_INIT, body: JSON.stringify(body), ...init});
        const data = await response.json();

        if (response.ok) return data as T;

        if (showSnackbar) this.snackbarService.show((data as ApiError).message);

        return null;
    }

    public async get<T>(url: string, body: any = '', init: Partial<RequestInit> = {}): Promise<T | null> {
        const response = await fetch(url, {...GET_REQUEST_INIT, body: JSON.stringify(body), ...init});
        const data = await response.json();

        if (response.ok) return data as T;

        this.snackbarService.show((data as ApiError).message);
        return null;
    }
}
