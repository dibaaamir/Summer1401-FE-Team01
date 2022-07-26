import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-login-register',
    templateUrl: './login-register.component.html',
    styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent {
    public username!: string;
    public password!: string;
    public confirm!: string;
    public email!: string;
    public firstName!: string;
    public lastName!: string;

    public loginWithEmail: boolean = false;

    public selectedIndex: number = 0;
    public get isInLoginView(): boolean {
        return this.selectedIndex == 0;
    }

    public constructor(private authService: AuthService) {}

    public get secondaryLoginButtonText(): string {
        return this.loginWithEmail ? 'ورود با نام کاربری' : 'ورود با ایمیل';
    }
    public async formSubmitHandler(): Promise<void> {
        if (this.isInLoginView) {
            if (this.loginWithEmail) this.username = '';
            else this.email = '';

            // await this.authService.login(this.user);
        }
        // else await this.authService.signup(this.user);
    }

    public onchange(event: Event): void {
        console.log(event);
    }
}
