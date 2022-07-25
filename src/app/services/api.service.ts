import {Injectable} from '@angular/core';
import {POST_REQUEST_INIT} from '../utils/api.utils';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor() {}

    public async post<T>(url: string, body: any = '', init: Partial<RequestInit> = {}): Promise<T | null> {
        const response = await fetch(url, {...POST_REQUEST_INIT, body: JSON.stringify(body), ...init});
        const data = await response.json();

        console.log('status code', response.status);
        console.log('data', data);

        if (response.status === 200) return data as T;

        // this.snackbarService.show((data as ApiErrorModel).message);
        return null;
    }
}
