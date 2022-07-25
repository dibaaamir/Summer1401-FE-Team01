import {Component} from '@angular/core';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    public text!: string;
    public borderColor: string | null = null;
    public shown: boolean = false;

    public timeoutId: number | null = null;

    public show(text: string, color: string | null = null): void {
        this.text = text;
        this.borderColor = color;
        this.shown = true;
        this.startCloseTimer();
    }

    public close(): void {
        this.shown = false;
        this.stopCloseTimer();
    }

    public startCloseTimer(): void {
        this.timeoutId = setTimeout(() => this.close(), 5000);
    }

    public stopCloseTimer(): void {
        if (!!this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }
}
