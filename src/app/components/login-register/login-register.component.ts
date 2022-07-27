import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {SnackbarService} from '../../services/snackbar.service';

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

    public constructor(
        private router: Router,
        private authService: AuthService,
        private snackbarService: SnackbarService
    ) {}

    public get secondaryLoginButtonText(): string {
        return this.loginWithEmail ? 'ورود با نام کاربری' : 'ورود با ایمیل';
    }

    public get user(): Partial<User> {
        return {
            password: this.password,
            ...(!this.isInLoginView && !!this.firstName && {firstName: this.firstName}),
            ...(!this.isInLoginView && !!this.lastName && {lastName: this.lastName}),
            ...((!this.isInLoginView || this.loginWithEmail) && {email: this.email}),
            ...((!this.isInLoginView || !this.loginWithEmail) && {username: this.username}),
        };
    }

    public resetFields(): void {
        this.username = '';
        this.password = '';
        this.confirm = '';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
    }

    public async formSubmitHandler(): Promise<void> {
        let success;
        if (this.isInLoginView) {
            if (this.loginWithEmail) this.username = '';
            else this.email = '';

            success = await this.authService.login(this.user);
        } else {
            if (this.password !== this.confirm) {
                this.snackbarService.show('پسورد و تکرار آن باهم همخوانی ندارند');
                this.password = '';
                this.confirm = '';
                return;
            }
            success = await this.authService.signup(this.user);
        }
        if (success) await this.router.navigateByUrl('/profile');
    }

    public toggleLoginEmail(): void {
        this.loginWithEmail = !this.loginWithEmail;
    }
}
