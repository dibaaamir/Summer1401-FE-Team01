import {Component} from '@angular/core';

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

    public isInLoginView: boolean = true;

    public resetFields(): void {
        this.username = '';
        this.password = '';
        this.confirm = '';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
    }
}
