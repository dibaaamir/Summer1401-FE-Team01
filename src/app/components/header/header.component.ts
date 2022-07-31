import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public constructor(private authService: AuthService) {}

    public get isLoggedIn(): boolean {
        return this.authService.cachedIsLoggedIn!;
    }
}
