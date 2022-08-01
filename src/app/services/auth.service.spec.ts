import {TestBed} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {LocalStorageMock} from '../mocks/local-storage.mock';
import {
    FetchMock,
    VALID_TOKEN,
    VALID_USER_LOGIN_DATA_WITH_EMAIL,
    VALID_USER_LOGIN_DATA_WITH_USERNAME,
    VALID_USER_REGISTER_DATA,
} from '../mocks/fetch.mock';
import {SnackbarService} from './snackbar.service';
import {SnackbarServiceMock} from '../mocks/snackbar-service.mock';

describe('AuthService', () => {
    let service: AuthService;
    let localStorageMock: LocalStorageMock;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [{provide: SnackbarService, useValue: new SnackbarServiceMock()}],
        });

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));
        spyOn(localStorage, 'clear').and.callFake(localStorageMock.clear.bind(localStorageMock));

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));

        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('tests token - empty', () => {
        expect(service.token).toEqual('');
    });

    it('tests token - value', () => {
        localStorageMock.setItem('token', 'value');
        expect(service.token).toEqual('value');
    });

    it('tests isLoggedIn - false - empty token', async () => {
        const response = await service.isLoggedIn();
        expect(response).toBeFalse();

        testCache('', false, null);
    });

    it('tests isLoggedIn - false - invalid token', async () => {
        localStorageMock.setItem('token', 'value');

        const response = await service.isLoggedIn();
        expect(response).toBeFalse();

        testCache('value', false, null);
    });

    it('tests isLoggedIn - true', async () => {
        localStorageMock.setItem('token', VALID_TOKEN);

        const response = await service.isLoggedIn();
        expect(response).toBeTrue();

        testCache(VALID_TOKEN, true, 23);
    });

    it('tests login - false', async () => {
        const response = await service.login({username: undefined, password: undefined});
        expect(response).toBeFalse();

        testCache('', false, null);
    });

    it('tests login - with username - true', async () => {
        const response = await service.login(VALID_USER_LOGIN_DATA_WITH_USERNAME);
        expect(response).toBeTrue();

        testCache(VALID_TOKEN, true, 23);
    });

    it('tests login - with email - true', async () => {
        const response = await service.login(VALID_USER_LOGIN_DATA_WITH_EMAIL);
        expect(response).toBeTrue();

        testCache(VALID_TOKEN, true, 23);
    });

    it('tests register - false', async () => {
        const response = await service.register({username: undefined, password: undefined, email: undefined});
        expect(response).toBeFalse();

        testCache('', false, null);
    });

    it('tests register - true', async () => {
        const response = await service.register(VALID_USER_REGISTER_DATA);
        expect(response).toBeTrue();

        testCache(VALID_TOKEN, true, 23);
    });

    it('tests logout', async () => {
        await service.logout();

        testCache('', false, null);
    });

    // [SECTION] Utility Functions

    const testCache = (token: string, isLoggedIn: boolean | null, userId: number | null): void => {
        expect(service.token).toEqual(token);
        expect(service.cachedIsLoggedIn).toEqual(isLoggedIn);
        expect(service.cachedUserId).toEqual(userId);
    };
});
