import {TestBed} from '@angular/core/testing';
// import {RouterTestingModule} from '@angular/router/testing';
// import {SnackbarService} from './snackbar.service';
// import {SnackbarServiceMock} from '../mocks/snackbar-service.mock';
import {ApiService} from './api.service';

describe('ApiService', () => {
    let service: ApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // imports: [RouterTestingModule],
            // providers: [{provide: SnackbarService, useValue: new SnackbarServiceMock()}],
        });
        service = TestBed.inject(ApiService);
    });

    it('tests create', () => {
        expect(service).toBeTruthy();
    });
});
