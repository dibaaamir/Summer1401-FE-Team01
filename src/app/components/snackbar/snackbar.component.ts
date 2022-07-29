import {Component, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnDestroy {
    public text!: string;
    public hidden: boolean = true;

    private AUTO_HIDE_TIMEOUT: number = 5000;
    public timeoutId: number | null = null;

    public show(text: string): void {
        this.text = text;
        this.hidden = false;
        this.startHideTimer();
    }

    public hide(): void {
        this.hidden = true;
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

    public ngOnDestroy(): void {
        this.stopHideTimer();
    }
}
