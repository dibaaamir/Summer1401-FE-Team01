import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public constructor(private authService: AuthService) {}

    public testSignup(): void {
        this.authService
            .signup({
                username: 'BijanProgrammer7',
                email: 'bijaneisapour7@gmail.com',
                password: '1234',
                firstName: 'بیژن',
                lastName: 'عیسی پور',
            })
            .then();
    }

    public testLogin(): void {}

    public testLogout(): void {}

    public testIsLoggedIn(): void {}
}
