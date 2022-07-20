import {Component} from '@angular/core';
import {User} from './models/user';

export const currentUser = new User('user123', '');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
