import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public isInHome: boolean = false;

    public constructor(private router: Router) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) this.isInHome = event.urlAfterRedirects === '/';
        });
    }
}
