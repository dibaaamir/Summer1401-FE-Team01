import {Component} from '@angular/core';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    public text!: string;
    public shown: boolean = false;

    private AUTO_HIDE_TIMEOUT: number = 5000;
    public timeoutId: number | null = null;

    public show(text: string): void {
        this.text = text;
        this.shown = true;
        this.startHideTimer();
    }

    public hide(): void {
        this.shown = false;
        this.stopHideTimer();
    }

    public startHideTimer(): void {
        this.timeoutId = setTimeout(() => this.hide(), this.AUTO_HIDE_TIMEOUT);
    }

    public stopHideTimer(): void {
        if (!!this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    }
}
