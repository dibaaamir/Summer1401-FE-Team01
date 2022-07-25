import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public constructor(private authService: AuthService) {}

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
