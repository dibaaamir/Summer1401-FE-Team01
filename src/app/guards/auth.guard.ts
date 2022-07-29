import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    public constructor(private router: Router, private authService: AuthService) {}

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const isLoggedIn = await this.authService.isLoggedIn();
        const goingToAuth = !!route.routeConfig?.path?.startsWith('auth');

        let isAllowed = isLoggedIn != goingToAuth;

        if (!isAllowed) {
            if (goingToAuth) await this.router.navigateByUrl('/profile');
            else await this.router.navigateByUrl('/auth');
        }

        return isAllowed;
    }
}
