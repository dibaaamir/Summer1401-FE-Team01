import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SnackbarComponent} from './components/snackbar/snackbar.component';
import {SnackbarService} from './services/snackbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('snackbar') public snackbarRef!: SnackbarComponent;

    public constructor(private snackbarService: SnackbarService) {}

    public ngAfterViewInit(): void {
        this.snackbarService.initComponent(this.snackbarRef);
    }
}
