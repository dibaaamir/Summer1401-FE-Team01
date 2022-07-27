import {Injectable} from '@angular/core';
import {SnackbarComponent} from '../components/snackbar/snackbar.component';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    private snackbarComponent!: SnackbarComponent;

    public initComponent(snackbarComponent: SnackbarComponent): void {
        this.snackbarComponent = snackbarComponent;
    }

    public show(text: string): void {
        this.snackbarComponent.show(text);
    }
}
