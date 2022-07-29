import {Component} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../../../models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../../auth-form.scss'],
})
export class LoginComponent {
    public username!: string;
    public password!: string;
    public email!: string;

    public loginWithEmail: boolean = false;

    public constructor(private router: Router, private authService: AuthService) {}

    public get user(): Partial<User> {
        const user: Partial<User> = {password: this.password};

        if (this.loginWithEmail) user.email = this.email;
        else user.username = this.username;

        return user;
    }

    public toggleLoginEmail(): void {
        this.loginWithEmail = !this.loginWithEmail;
    }

    public async formSubmitHandler(): Promise<void> {
        if (await this.isSubmitSuccessful()) await this.router.navigateByUrl('/profile');
    }

    private async isSubmitSuccessful(): Promise<boolean> {
        if (this.loginWithEmail) this.username = '';
        else this.email = '';

        return await this.authService.login(this.user);
    }
}
