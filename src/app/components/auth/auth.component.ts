import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {SnackbarService} from '../../services/snackbar.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public username!: string;
    public password!: string;
    public confirm!: string;
    public email!: string;
    public firstName!: string;
    public lastName!: string;

    public loginWithEmail: boolean = false;

    public isInLoginView: boolean = true;

    public constructor(
        private router: Router,
        private authService: AuthService,
        private snackbarService: SnackbarService
    ) {}

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
        if (await this.isSubmitSuccessful()) await this.router.navigateByUrl('/profile');
    }

    private async isSubmitSuccessful(): Promise<boolean> {
        if (this.isInLoginView) {
            if (this.loginWithEmail) this.username = '';
            else this.email = '';

            return await this.authService.login(this.user);
        }
        if (this.password !== this.confirm) {
            this.snackbarService.show('پسورد و تکرار آن باهم همخوانی ندارند');
            this.password = '';
            this.confirm = '';
            return false;
        }

        return await this.authService.register(this.user);
    }

    public toggleLoginEmail(): void {
        this.loginWithEmail = !this.loginWithEmail;
    }
}
