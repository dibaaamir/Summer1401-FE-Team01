import {Component} from '@angular/core';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    public text: string = '';
    public borderColor: string | null = null;

    public show(text: string, color: string | null = null): void {
        this.text = text;
        this.borderColor = color;
        setTimeout(() => this.close(), 3000);
    }

    public close(): void {
        this.text = '';
    }
}
