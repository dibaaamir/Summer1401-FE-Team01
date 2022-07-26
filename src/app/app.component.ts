import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {AuthService} from './services/auth.service';
import {SnackbarComponent} from './components/snackbar/snackbar.component';
import {SnackbarService} from './services/snackbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('snackbar') public snackbarRef!: SnackbarComponent;

    public constructor(private authService: AuthService, private snackbarService: SnackbarService) {}

    public ngAfterViewInit(): void {
        this.snackbarService.initComponent(this.snackbarRef);
        // setTimeout(() => this.snackbarService.show('سلام'), 4000);
    }

    public async testSignup(): Promise<void> {
        console.log(
            'testSignup',
            await this.authService.signup({
                username: 'BijanProgrammer7',
                email: 'bijaneisapour7@gmail.com',
                password: '1234',
            })
        );
    }

    public async testLogin(): Promise<void> {
        console.log(
            'testLogin',
            await this.authService.login({
                username: 'BijanProgrammer7',
                password: '1234',
            })
        );
    }

    public async testLogout(): Promise<void> {
        this.authService.logout();
        // noinspection JSVoidFunctionReturnValueUsed
        console.log('testLogout', await this.authService.logout());
    }

    public async testIsLoggedIn(): Promise<void> {
        console.log('testIsLoggedIn', await this.authService.isLoggedIn());
    }
}
